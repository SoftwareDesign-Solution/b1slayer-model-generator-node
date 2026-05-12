import { XmlElement } from "xml-trueformat";
import { TypeScriptGeneratorBase } from "./TypeScriptGeneratorBase.js";

/**
 * Abstrakte Basisklasse für TypeScript-Klassen-Generatoren (ComplexType, EntityType).
 * Enthält die gemeinsame Logik für die Type-Generierung
 * sowie die EDM-zu-TypeScript Typ-Konvertierung.
 */
export abstract class TypeScriptClassGeneratorBase extends TypeScriptGeneratorBase {

    /**
     * Generiert einen TypeScript Type aus den EDMX-Metadaten
     * @param name Type-Name
     * @param properties Liste der Property-XmlElements
     * @returns Generierter TypeScript-Code als String
     */
    protected generateType(name: string, properties: XmlElement[]): string {
        const lines: string[] = [];

        // Referenzierte externe Typen ermitteln
        const imports = this.buildImports(properties);

        // Import-Anweisungen ausgeben
        for (const importedType of imports)
            lines.push(`import type { ${importedType} } from "./${importedType}";`);

        if (imports.size > 0)
            lines.push("");

        lines.push(`export type ${name} = {`);

        for (const prop of properties) {
            const propName = this.getAttributeValue(prop, "Name")!;
            const propType = this.getAttributeValue(prop, "Type")!;

            // Nullable-Default laut OData-Spezifikation ist true
            const nullable = this.getAttributeValue(prop, "Nullable") ?? "true";
            const tsType   = this.mapEdmTypeToTypeScript(propType);

            // Nullable=true  → type | null
            // Nullable=false → type
            const fullType = nullable !== "false" ? `${tsType} | null` : tsType;

            lines.push(`\t${propName}: ${fullType};`);
        }

        lines.push("}");

        return lines.join("\n");
    }

    /**
     * Ermittelt alle externen Typen die importiert werden müssen.
     * Betroffen sind Collection-Typen und direkte Namespace-Typen wie SAPB1.TeamMember.
     * Primitive Typen (string, number, boolean, Date, Uint8Array) werden ignoriert.
     */
    private buildImports(properties: XmlElement[]): Set<string> {
        const imports     = new Set<string>();
        const primitives  = new Set(["string", "number", "boolean", "Date", "Uint8Array", "unknown"]);

        for (const prop of properties) {

            /*
            const propType = this.getAttributeValue(prop, "Type")!;
            const tsType   = this.mapEdmTypeToTypeScript(propType);

            // Array-Suffix entfernen z.B. DocumentLine[] → DocumentLine
            const baseType = tsType.endsWith("[]") ? tsType.slice(0, -2) : tsType;

            // Primitive Typen überspringen
            if (!primitives.has(baseType))
                imports.add(baseType);
            */

            const propType = this.getAttributeValue(prop, "Type") ?? "";

            // Collection(SAPB1.DocumentLine) → SAPB1.DocumentLine extrahieren
            const innerType = propType.startsWith("Collection(") && propType.endsWith(")")
                ? propType.slice(11, -1)
                : propType;

            // Nur Typen mit Namespace-Prefix importieren — Edm.* überspringen
            if (innerType.includes(".") && !innerType.startsWith("Edm.")) {
                // Namespace-Prefix entfernen z.B. SAPB1.DocumentLine → DocumentLine
                const typeName = innerType.substring(innerType.lastIndexOf(".") + 1);
                imports.add(typeName);
            }
        }

        return imports;
    }

    /**
     * Konvertiert einen EDM-Typ in den entsprechenden TypeScript-Typ.
     * Unterstützt Collection-Typen und Namespace-Prefixe.
     * @param edmType EDM-Typ z.B. Edm.String, Collection(SAPB1.TeamMember)
     * @returns TypeScript-Typ als String
     */
    protected mapEdmTypeToTypeScript(edmType: string): string {
        // Collection(Namespace.TypeName) → TypeName[]
        if (edmType.startsWith("Collection(") && edmType.endsWith(")")) {
            // Inneren Typ extrahieren z.B. SAPB1.TeamMember
            const innerType   = edmType.slice(11, -1);

            // Rekursiv auflösen
            const mappedInner = this.mapEdmTypeToTypeScript(innerType);
            return `${mappedInner}[]`;
        }

        // Namespace-Prefix entfernen z.B. SAPB1.TeamMember → TeamMember
        const cleanType = edmType.includes(".")
            ? edmType.substring(edmType.lastIndexOf(".") + 1)
            : edmType;

        // EDM-Typ auf TypeScript-Typ mappen
        const typeMap: Record<string, string> = {
            "String":         "string",
            "Int16":          "number",
            "Int32":          "number",
            "Int64":          "number",
            "Decimal":        "number",
            "Double":         "number",
            "Single":         "number",
            "Boolean":        "boolean",
            "DateTime":       "Date",
            "DateTimeOffset": "Date",
            "Guid":           "string",
            "Binary":         "Uint8Array",
        };

        return typeMap[cleanType] ?? cleanType; // Unbekannte Typen unverändert lassen
    }
}

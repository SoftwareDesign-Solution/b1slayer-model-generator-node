import { XmlElement } from "xml-trueformat";
import { TypeScriptGeneratorBase } from "./TypeScriptGeneratorBase.js";
/**
 * Abstrakte Basisklasse für TypeScript-Klassen-Generatoren (ComplexType, EntityType).
 * Enthält die gemeinsame Logik für die Type-Generierung
 * sowie die EDM-zu-TypeScript Typ-Konvertierung.
 */
export declare abstract class TypeScriptClassGeneratorBase extends TypeScriptGeneratorBase {
    /**
     * Generiert einen TypeScript Type aus den EDMX-Metadaten
     * @param name Type-Name
     * @param properties Liste der Property-XmlElements
     * @returns Generierter TypeScript-Code als String
     */
    protected generateType(name: string, properties: XmlElement[]): string;
    /**
     * Ermittelt alle externen Typen die importiert werden müssen.
     * Betroffen sind Collection-Typen und direkte Namespace-Typen wie SAPB1.TeamMember.
     * Primitive Typen (string, number, boolean, Date, Uint8Array) werden ignoriert.
     */
    private buildImports;
    /**
     * Konvertiert einen EDM-Typ in den entsprechenden TypeScript-Typ.
     * Unterstützt Collection-Typen und Namespace-Prefixe.
     * @param edmType EDM-Typ z.B. Edm.String, Collection(SAPB1.TeamMember)
     * @returns TypeScript-Typ als String
     */
    protected mapEdmTypeToTypeScript(edmType: string): string;
}

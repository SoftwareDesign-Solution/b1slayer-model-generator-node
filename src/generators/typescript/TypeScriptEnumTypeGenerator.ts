import { XmlElement } from "xml-trueformat";
import { TypeScriptGeneratorBase } from "./TypeScriptGeneratorBase.js";

/**
 * Generiert TypeScript Enum-Dateien aus EDMX EnumType-Elementen
 */
export class TypeScriptEnumTypeGenerator extends TypeScriptGeneratorBase {

    /**
     * Generiert einen TypeScript Enum aus einem EDMX EnumType-Element
     * @param type EnumType XmlElement
     * @returns Generierter TypeScript Enum-Code
     */
    protected generate(type: XmlElement): string {
        const name    = this.getAttributeValue(type, "Name")!;
        const members = this.getChildElements(type, "Member");

        const lines: string[] = [];
        lines.push(`export enum ${name} {`);

        for (const member of members) {
            const memberName  = this.getAttributeValue(member, "Name")!;
            const memberValue = this.getAttributeValue(member, "Value");

            // Mit Wert: MemberName = 1, ohne Wert: MemberName,
            lines.push(memberValue
                ? `\t${memberName} = ${memberValue},`
                : `\t${memberName},`);
        }

        lines.push("}");

        return lines.join("\n");
    }
}

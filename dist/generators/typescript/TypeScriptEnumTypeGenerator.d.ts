import { XmlElement } from "xml-trueformat";
import { TypeScriptGeneratorBase } from "./TypeScriptGeneratorBase.js";
/**
 * Generiert TypeScript Enum-Dateien aus EDMX EnumType-Elementen
 */
export declare class TypeScriptEnumTypeGenerator extends TypeScriptGeneratorBase {
    /**
     * Generiert einen TypeScript Enum aus einem EDMX EnumType-Element
     * @param type EnumType XmlElement
     * @returns Generierter TypeScript Enum-Code
     */
    protected generate(type: XmlElement): string;
}

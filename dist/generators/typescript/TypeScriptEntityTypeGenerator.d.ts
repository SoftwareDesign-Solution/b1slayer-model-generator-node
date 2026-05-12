import { XmlElement } from "xml-trueformat";
import { TypeScriptClassGeneratorBase } from "./TypeScriptClassGeneratorBase.js";
/**
 * Generiert TypeScript Type-Dateien aus EDMX EntityType-Elementen
 */
export declare class TypeScriptEntityTypeGenerator extends TypeScriptClassGeneratorBase {
    /**
     * Generiert einen TypeScript Type aus einem EDMX EntityType-Element
     * @param type EntityType XmlElement
     * @returns Generierter TypeScript Type-Code
     */
    protected generate(type: XmlElement): string;
}

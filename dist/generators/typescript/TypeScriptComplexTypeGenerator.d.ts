import { XmlElement } from "xml-trueformat";
import { TypeScriptClassGeneratorBase } from "./TypeScriptClassGeneratorBase.js";
/**
 * Generiert TypeScript Type-Dateien aus EDMX ComplexType-Elementen
 */
export declare class TypeScriptComplexTypeGenerator extends TypeScriptClassGeneratorBase {
    /**
     * Generiert einen TypeScript Type aus einem EDMX ComplexType-Element
     * @param type ComplexType XmlElement
     * @returns Generierter TypeScript Type-Code
     */
    protected generate(type: XmlElement): string;
}

import { XmlElement } from "xml-trueformat";
import { TypeScriptClassGeneratorBase } from "./TypeScriptClassGeneratorBase.js";
/**
 * Generiert TypeScript Type-Dateien aus EDMX ComplexType-Elementen
 */
export class TypeScriptComplexTypeGenerator extends TypeScriptClassGeneratorBase {
    /**
     * Generiert einen TypeScript Type aus einem EDMX ComplexType-Element
     * @param type ComplexType XmlElement
     * @returns Generierter TypeScript Type-Code
     */
    generate(type) {
        return this.generateType(this.getAttributeValue(type, "Name"), this.getChildElements(type, "Property"));
    }
}
//# sourceMappingURL=TypeScriptComplexTypeGenerator.js.map
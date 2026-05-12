import { XmlElement } from "xml-trueformat";
import { TypeScriptClassGeneratorBase } from "./TypeScriptClassGeneratorBase.js";
/**
 * Generiert TypeScript Type-Dateien aus EDMX EntityType-Elementen
 */
export class TypeScriptEntityTypeGenerator extends TypeScriptClassGeneratorBase {
    /**
     * Generiert einen TypeScript Type aus einem EDMX EntityType-Element
     * @param type EntityType XmlElement
     * @returns Generierter TypeScript Type-Code
     */
    generate(type) {
        return this.generateType(this.getAttributeValue(type, "Name"), this.getChildElements(type, "Property"));
    }
}
//# sourceMappingURL=TypeScriptEntityTypeGenerator.js.map
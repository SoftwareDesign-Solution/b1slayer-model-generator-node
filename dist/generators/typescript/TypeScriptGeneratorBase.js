import { XmlElement } from "xml-trueformat";
import { GeneratorBase } from "../base/GeneratorBase.js";
import * as path from "path";
/**
 * Abstrakte Basisklasse für alle TypeScript-Generatoren.
 * Definiert den Dateinamen mit .ts Erweiterung.
 */
export class TypeScriptGeneratorBase extends GeneratorBase {
    /**
     * Gibt den Dateipfad mit .ts Erweiterung zurück
     * @param type XmlElement des Typs
     * @returns Vollständiger Dateipfad mit .ts Erweiterung
     */
    getFileName(type) {
        return path.join(this.outputDir, `${this.getAttributeValue(type, "Name")}.ts`);
    }
}
//# sourceMappingURL=TypeScriptGeneratorBase.js.map
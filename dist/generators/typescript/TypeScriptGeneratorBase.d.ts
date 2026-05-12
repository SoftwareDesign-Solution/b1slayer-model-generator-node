import { XmlElement } from "xml-trueformat";
import { GeneratorBase } from "../base/GeneratorBase.js";
/**
 * Abstrakte Basisklasse für alle TypeScript-Generatoren.
 * Definiert den Dateinamen mit .ts Erweiterung.
 */
export declare abstract class TypeScriptGeneratorBase extends GeneratorBase {
    /**
     * Gibt den Dateipfad mit .ts Erweiterung zurück
     * @param type XmlElement des Typs
     * @returns Vollständiger Dateipfad mit .ts Erweiterung
     */
    protected getFileName(type: XmlElement): string;
}

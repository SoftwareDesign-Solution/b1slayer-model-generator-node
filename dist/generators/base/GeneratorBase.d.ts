import { XmlElement } from "xml-trueformat";
import type { GeneratorOptions } from "../../options/GeneratorOptions";
/**
 * Abstrakte Basisklasse für alle Generatoren.
 * Enthält die gemeinsame Logik für Filterung und Datei-Ausgabe.
 */
export declare abstract class GeneratorBase {
    /** Ziel-Namespace / Package für die generierten Klassen */
    protected readonly namespace: string;
    /** Ausgabeverzeichnis für die generierten Dateien */
    protected readonly outputDir: string;
    /**
     * Initialisiert die Basisklasse mit Namespace und Ausgabeverzeichnis
     * @param namespace Ziel-Namespace
     * @param outputDir Ausgabeverzeichnis
     */
    constructor(namespace: string, outputDir: string);
    /**
     * Filtert die Typen anhand von Include/Exclude und generiert je eine Datei pro Typ
     * @param types Liste der zu verarbeitenden XmlElements
     * @param options Konfigurationsoptionen mit Include/Exclude
     */
    generateAsync(types: XmlElement[], options: GeneratorOptions): Promise<void>;
    /**
     * Generiert den Code für einen einzelnen Typ
     * @param type XmlElement des Typs
     * @returns Generierter Code als String
     */
    protected abstract generate(type: XmlElement): string;
    /**
     * Gibt den vollständigen Dateipfad für die generierte Datei zurück
     * @param type XmlElement des Typs
     * @returns Vollständiger Dateipfad
     */
    protected abstract getFileName(type: XmlElement): string;
    /**
     * Liest den Wert eines Attributs aus einem XmlElement
     * @param element XmlElement
     * @param name Attributname
     * @returns Attributwert oder undefined
     */
    protected getAttributeValue(element: XmlElement, name: string): string | undefined;
    /**
     * Gibt alle Kind-Elemente mit dem angegebenen lokalen Namen zurück
     * @param element Eltern-XmlElement
     * @param localName Lokaler Elementname ohne Namespace-Prefix
     * @returns Liste der gefundenen XmlElements
     */
    protected getChildElements(element: XmlElement, localName: string): XmlElement[];
    /**
     * Wendet Include- und Exclude-Filter auf die Typenliste an.
     * Include hat Vorrang — nur explizit genannte Objekte werden berücksichtigt.
     * Exclude wird danach angewendet.
     * @param types Ungefilterte Typenliste
     * @param include Whitelist der zu generierenden Typen
     * @param exclude Blacklist der nicht zu generierenden Typen
     * @returns Gefilterte Typenliste
     */
    private applyFilter;
}

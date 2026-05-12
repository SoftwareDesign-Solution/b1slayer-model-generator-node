import { XmlElement } from "xml-trueformat";
import type { GeneratorOptions } from "../../options/GeneratorOptions";
import * as fs from "fs/promises";
import * as path from "path";

/**
 * Abstrakte Basisklasse für alle Generatoren.
 * Enthält die gemeinsame Logik für Filterung und Datei-Ausgabe.
 */
export abstract class GeneratorBase {

    /** Ziel-Namespace / Package für die generierten Klassen */
    protected readonly namespace: string;

    /** Ausgabeverzeichnis für die generierten Dateien */
    protected readonly outputDir: string;

    /**
     * Initialisiert die Basisklasse mit Namespace und Ausgabeverzeichnis
     * @param namespace Ziel-Namespace
     * @param outputDir Ausgabeverzeichnis
     */
    constructor(namespace: string, outputDir: string) {
        this.namespace = namespace;
        this.outputDir = outputDir;
    }

    /**
     * Filtert die Typen anhand von Include/Exclude und generiert je eine Datei pro Typ
     * @param types Liste der zu verarbeitenden XmlElements
     * @param options Konfigurationsoptionen mit Include/Exclude
     */
    async generateAsync(types: XmlElement[], options: GeneratorOptions): Promise<void> {
        // Include/Exclude Filter anwenden
        const filtered = this.applyFilter(types, options.include, options.exclude);

        console.log(`[${this.constructor.name}] ${filtered.length} von ${types.length} Typen werden generiert.`);

        // Pro Typ eine Datei generieren
        for (const type of filtered) {
            const code     = this.generate(type);
            const fileName = this.getFileName(type);

            await fs.writeFile(fileName, code, "utf-8");

            console.log(`[${this.constructor.name}] Erstellt → ${path.basename(fileName)}`);
        }
    }

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
    protected getAttributeValue(element: XmlElement, name: string): string | undefined {
        return element.getAttributeValue(name) ?? undefined;
    }

    /**
     * Gibt alle Kind-Elemente mit dem angegebenen lokalen Namen zurück
     * @param element Eltern-XmlElement
     * @param localName Lokaler Elementname ohne Namespace-Prefix
     * @returns Liste der gefundenen XmlElements
     */
    protected getChildElements(element: XmlElement, localName: string): XmlElement[] {
        return element
            .children
            .filter((c): c is XmlElement =>
                c instanceof XmlElement &&
                c.tagName.split(":").pop() === localName);
    }

    /**
     * Wendet Include- und Exclude-Filter auf die Typenliste an.
     * Include hat Vorrang — nur explizit genannte Objekte werden berücksichtigt.
     * Exclude wird danach angewendet.
     * @param types Ungefilterte Typenliste
     * @param include Whitelist der zu generierenden Typen
     * @param exclude Blacklist der nicht zu generierenden Typen
     * @returns Gefilterte Typenliste
     */
    private applyFilter(types: XmlElement[], include: string[], exclude: string[]): XmlElement[] {
        let result = types;

        // Include — nur explizit genannte Typen berücksichtigen
        if (include.length > 0)
            result = result.filter(t =>
                include.some(i =>
                    i.toLowerCase() === this.getAttributeValue(t, "Name")?.toLowerCase()));

        // Exclude — explizit ausgeschlossene Typen entfernen
        if (exclude.length > 0)
            result = result.filter(t =>
                !exclude.some(e =>
                    e.toLowerCase() === this.getAttributeValue(t, "Name")?.toLowerCase()));
        
        return result;
    }
}

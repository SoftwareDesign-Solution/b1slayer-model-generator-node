import { TargetLanguage } from "./TargetLanguage.js";

/**
 * Enthält alle Konfigurationsoptionen für die Codegenerierung
 */
export interface GeneratorOptions {
    /** Pfad zur EDMX-Metadatendatei */
    metadataFile: string;

    /** Ziel-Namespace / Package für die generierten Klassen */
    namespace: string;

    /** Ausgabeverzeichnis für die generierten Dateien */
    outputDir: string;

    /** Liste der Objekte die ausschließlich generiert werden sollen */
    include: string[];

    /** Liste der Objekte die nicht generiert werden sollen */
    exclude: string[];

    /** Zielsprache für die Codegenerierung */
    language: TargetLanguage;
}

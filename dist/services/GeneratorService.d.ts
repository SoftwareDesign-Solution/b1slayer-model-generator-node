import type { GeneratorOptions } from "../options/GeneratorOptions.js";
/**
 * Orchestriert die Codegenerierung — lädt das Schema, erstellt die Generatoren
 * und verarbeitet jeden Typ mit dem entsprechenden Generator.
 */
export declare class GeneratorService {
    /**
     * Startet die Codegenerierung mit den angegebenen Optionen
     * @param options Konfigurationsoptionen
     */
    runAsync(options: GeneratorOptions): Promise<void>;
    /**
     * Führt einen einzelnen Generator für den angegebenen GeneratorKind aus.
     * Ist kein Generator für den Kind registriert, wird er stillschweigend übersprungen.
     * @param generators Map mit den verfügbaren Generatoren
     * @param kind Der zu verarbeitende Generatortyp
     * @param types Liste der zu verarbeitenden XmlElements
     * @param options Konfigurationsoptionen
     */
    private runGeneratorAsync;
    private loadSchema;
    private findSchema;
}

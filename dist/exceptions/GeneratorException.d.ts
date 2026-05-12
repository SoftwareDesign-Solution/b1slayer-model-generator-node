/**
 * Wird ausgelöst wenn ein bekannter Fehler während der Codegenerierung auftritt
 */
export declare class GeneratorException extends Error {
    /**
     * Erstellt eine neue GeneratorException mit der angegebenen Fehlermeldung
     * @param message Fehlermeldung
     */
    constructor(message: string);
}

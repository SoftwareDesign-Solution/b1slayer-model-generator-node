/**
 * Wird ausgelöst wenn ein bekannter Fehler während der Codegenerierung auftritt
 */
export class GeneratorException extends Error {
    /**
     * Erstellt eine neue GeneratorException mit der angegebenen Fehlermeldung
     * @param message Fehlermeldung
     */
    constructor(message) {
        super(message);
        this.name = "GeneratorException";
    }
}
//# sourceMappingURL=GeneratorException.js.map
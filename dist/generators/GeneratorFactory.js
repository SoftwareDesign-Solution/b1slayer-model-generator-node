import { GeneratorBase } from "./base/GeneratorBase.js";
import { GeneratorKind } from "./GeneratorKind.js";
import { TypeScriptGeneratorProfile } from "./typescript/TypeScriptGeneratorProfile.js";
import { GeneratorException } from "../exceptions/GeneratorException.js";
/**
 * Zentrale Factory für die Erstellung der Generator-Maps.
 * Verwaltet die registrierten IGeneratorProfile-Implementierungen
 * und wählt anhand der gewählten Zielsprache das passende Profil aus.
 *
 * Neue Zielsprachen können über registerProfile() registriert werden
 * ohne die Factory selbst zu verändern — Open/Closed Prinzip.
 */
export class GeneratorFactory {
    /**
     * Interne Liste der registrierten Profile — initial mit den Standard-Profilen befüllt
     */
    static profiles = [
        new TypeScriptGeneratorProfile(),
    ];
    /**
     * Erstellt die Generator-Map für die in den Optionen gewählte Zielsprache.
     *
     * @param options Konfigurationsoptionen mit der gewählten Zielsprache
     * @returns Map mit einem Generator pro GeneratorKind
     * @throws {GeneratorException} Wenn kein Profil für die gewählte Sprache gefunden wurde
     */
    static create(options) {
        const profile = this.profiles.find(p => p.language === options.language);
        if (!profile)
            throw new GeneratorException(`Für die gewählte Zielsprache '${options.language}' wurde kein Generator-Profil gefunden.`);
        return profile.createGenerators(options);
    }
}
//# sourceMappingURL=GeneratorFactory.js.map
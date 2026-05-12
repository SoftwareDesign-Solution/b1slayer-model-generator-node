import { GeneratorBase } from "./base/GeneratorBase.js";
import { GeneratorKind } from "./GeneratorKind.js";
import type { GeneratorOptions } from "../options/GeneratorOptions";
/**
 * Zentrale Factory für die Erstellung der Generator-Maps.
 * Verwaltet die registrierten IGeneratorProfile-Implementierungen
 * und wählt anhand der gewählten Zielsprache das passende Profil aus.
 *
 * Neue Zielsprachen können über registerProfile() registriert werden
 * ohne die Factory selbst zu verändern — Open/Closed Prinzip.
 */
export declare class GeneratorFactory {
    /**
     * Interne Liste der registrierten Profile — initial mit den Standard-Profilen befüllt
     */
    private static readonly profiles;
    /**
     * Erstellt die Generator-Map für die in den Optionen gewählte Zielsprache.
     *
     * @param options Konfigurationsoptionen mit der gewählten Zielsprache
     * @returns Map mit einem Generator pro GeneratorKind
     * @throws {GeneratorException} Wenn kein Profil für die gewählte Sprache gefunden wurde
     */
    static create(options: GeneratorOptions): Map<GeneratorKind, GeneratorBase>;
}

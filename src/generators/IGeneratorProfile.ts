import { GeneratorBase } from "./base/GeneratorBase";
import { GeneratorKind } from "./GeneratorKind";
import type { GeneratorOptions } from "../options/GeneratorOptions";
import { TargetLanguage } from "../options/TargetLanguage";

/**
 * Definiert den Vertrag für ein Generator-Profil.
 * Jede Zielsprache implementiert dieses Interface und ist damit
 * vollständig eigenständig — die Factory muss nicht geändert werden
 * wenn eine neue Sprache hinzukommt.
 */
export interface IGeneratorProfile {

    /**
     * Die Zielsprache für die dieses Profil zuständig ist
     */
    readonly language: TargetLanguage;

    /**
     * Erstellt die Generator-Map für die jeweilige Zielsprache.
     * Der GeneratorKind dient als typsicherer Schlüssel
     * anstelle von fehleranfälligen Index-Zugriffen.
     */
    createGenerators(options: GeneratorOptions): Map<GeneratorKind, GeneratorBase>;
}
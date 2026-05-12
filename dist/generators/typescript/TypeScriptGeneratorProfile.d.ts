import type { IGeneratorProfile } from "../IGeneratorProfile.js";
import { GeneratorBase } from "../base/GeneratorBase.js";
import { GeneratorKind } from "../GeneratorKind.js";
import type { GeneratorOptions } from "../../options/GeneratorOptions.js";
import { TargetLanguage } from "../../options/TargetLanguage.js";
/**
 * Generator-Profil für die Zielsprache TypeScript.
 * Registriert alle verfügbaren TypeScript-Generatoren und ordnet sie
 * dem entsprechenden GeneratorKind zu.
 */
export declare class TypeScriptGeneratorProfile implements IGeneratorProfile {
    /** Die Zielsprache dieses Profils */
    readonly language = TargetLanguage.TypeScript;
    /**
     * Erstellt die Generator-Map für TypeScript
     * @param options Konfigurationsoptionen mit Namespace und Ausgabeverzeichnis
     * @returns Map mit TypeScript-Generatoren pro GeneratorKind
     */
    createGenerators(options: GeneratorOptions): Map<GeneratorKind, GeneratorBase>;
}

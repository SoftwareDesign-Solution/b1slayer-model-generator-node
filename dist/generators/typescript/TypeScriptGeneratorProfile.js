import { GeneratorBase } from "../base/GeneratorBase.js";
import { GeneratorKind } from "../GeneratorKind.js";
import { TargetLanguage } from "../../options/TargetLanguage.js";
import { TypeScriptEnumTypeGenerator } from "./TypeScriptEnumTypeGenerator.js";
import { TypeScriptComplexTypeGenerator } from "./TypeScriptComplexTypeGenerator.js";
import { TypeScriptEntityTypeGenerator } from "./TypeScriptEntityTypeGenerator.js";
/**
 * Generator-Profil für die Zielsprache TypeScript.
 * Registriert alle verfügbaren TypeScript-Generatoren und ordnet sie
 * dem entsprechenden GeneratorKind zu.
 */
export class TypeScriptGeneratorProfile {
    /** Die Zielsprache dieses Profils */
    language = TargetLanguage.TypeScript;
    /**
     * Erstellt die Generator-Map für TypeScript
     * @param options Konfigurationsoptionen mit Namespace und Ausgabeverzeichnis
     * @returns Map mit TypeScript-Generatoren pro GeneratorKind
     */
    createGenerators(options) {
        const { namespace, outputDir } = options;
        return new Map([
            [GeneratorKind.EnumType, new TypeScriptEnumTypeGenerator(namespace, outputDir)],
            [GeneratorKind.ComplexType, new TypeScriptComplexTypeGenerator(namespace, outputDir)],
            [GeneratorKind.EntityType, new TypeScriptEntityTypeGenerator(namespace, outputDir)]
        ]);
    }
}
//# sourceMappingURL=TypeScriptGeneratorProfile.js.map
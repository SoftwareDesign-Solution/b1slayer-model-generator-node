import type { TargetLanguage } from "./TargetLanguage.js";
export interface GeneratorOptions {
    metadataFile: string;
    namespace: string;
    outputDir: string;
    include: string[];
    exclude: string[];
    language: TargetLanguage;
}

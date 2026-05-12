import { Command } from 'commander';
import { TargetLanguage } from './options/TargetLanguage.js';
import type { GeneratorOptions } from './options/GeneratorOptions.js';
import { GeneratorService } from './services/GeneratorService.js';


const program = new Command();

program
  .name('b1slayer-model-generator')
  .description('Model Generator for SAP Business One Service Layer')
  .version('1.0.0')
  .requiredOption('-m, --metadatafile <path>', 'Path to the metadata file')
  .requiredOption('-n, --namespace <namespace>', 'Namespace for the generated models')
  .requiredOption('-o, --outputdir <directory>', 'Output directory for the generated models')
  .requiredOption('-l, --language <language>', 'Programming language for the generated models (e.g., ts, cs)')
  .option('--include <types...>', 'Specify one or more types to include in the generation process')
  .option('--exclude <types...>', 'Specify one or more types to exclude from the generation process')
  .action(async (opts) => {

    const languageMap: Record<string, TargetLanguage> = {
      'cs': TargetLanguage.CSharp,
      'csharp': TargetLanguage.CSharp,
      'ts': TargetLanguage.TypeScript,
      'typescript': TargetLanguage.TypeScript
    };

    const language = languageMap[opts.language.toLowerCase()];
    if (!language) {
      console.error(`Unsupported language: ${opts.language}. Supported languages are: ${Object.keys(languageMap).join(', ')}`);
      process.exit(1);
    }

    const options: GeneratorOptions = {
      metadataFile: opts.metadatafile,
      namespace: opts.namespace,
      outputDir: opts.outputdir,
      language: language,
      include: opts.include || [],
      exclude: opts.exclude || [],
    };

    // Call the service to generate models based on the options
    const service = new GeneratorService();
    await service.runAsync(options);

  });

program.parse();

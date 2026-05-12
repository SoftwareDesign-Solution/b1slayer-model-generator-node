import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';
import { XmlParser } from 'xml-trueformat';
import { TargetLanguage } from './options/TargetLanguage.js';
import { GeneratorService } from './services/GeneratorService.js';
/*
import { parseArgs } from 'node:util';

interface CliArgs {
  app?: string;
  topics?: string[];
  help?: boolean;
  version?: boolean;
}

function parseCommandLineArgs(): CliArgs {
  const { values } = parseArgs({
    args: process.argv.slice(2),
    options: {
      app: { type: 'string', short: 'a' },
      topics: { type: 'string', multiple: true, short: 't' },
      help: { type: 'boolean', short: 'h' },
      version: { type: 'boolean', short: 'v' }
    }
  });
  return values;
}

console.log("Hello, TypeScript 6.0.2 with NodeNext module system and ESNext target!");

const args = parseCommandLineArgs();

console.log("Parsed CLI Arguments:", JSON.stringify(args, null, 2));
*/
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
    console.log("Hello, TypeScript 6.0.3 with NodeNext module system and ESNext target!");
    console.log("Parsed CLI Options:", JSON.stringify(opts, null, 2));
    // Here you would add the logic to process the metadata file and generate the models based on the provided options.
    const languageMap = {
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
    const options = {
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
    //await fs.promises.mkdir(options.outputdir);
    /*
    const xmlContent = await fs.promises.readFile(options.metadatafile, 'utf-8');
    console.log("Read metadata file content successfully.");
    // Process the XML content and generate models...
    const document = XmlParser.parse(xmlContent);
    console.log("Parsed XML content successfully.");

    console.log(document.getRootElement().tagName);
    */
});
program.parse();
//# sourceMappingURL=index.js.map
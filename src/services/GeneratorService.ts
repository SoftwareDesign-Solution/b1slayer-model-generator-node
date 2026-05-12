import * as fs from 'fs';
import { XmlElement, XmlParser } from "xml-trueformat";
import type { GeneratorOptions } from "../options/GeneratorOptions.js";
import { GeneratorFactory } from '../generators/GeneratorFactory.js';
import { GeneratorKind } from '../generators/GeneratorKind.js';

/**
 * Orchestriert die Codegenerierung — lädt das Schema, erstellt die Generatoren
 * und verarbeitet jeden Typ mit dem entsprechenden Generator.
 */
export class GeneratorService {
    
    /**
     * Startet die Codegenerierung mit den angegebenen Optionen
     * @param options Konfigurationsoptionen
     */
    async runAsync(options: GeneratorOptions): Promise<void> {
        
        // EDMX-Schema laden und parsen
        const schema = await this.loadSchema(options.metadataFile);

        // Generator-Map für die gewählte Zielsprache erstellen
        const generators = GeneratorFactory.create(options);
        
        console.log("Schema loaded successfully:", schema.tagName);
        // Here you would add the logic to process the schema and generate the models based on the provided options.

        // Typen aus dem Schema-Element extrahieren
        const enumTypes = schema.children.filter(child => child instanceof XmlElement && child.tagName == 'EnumType') as XmlElement[];
        const complexTypes = schema.children.filter(child => child instanceof XmlElement && child.tagName == 'ComplexType') as XmlElement[];
        const entityTypes = schema.children.filter(child => child instanceof XmlElement && child.tagName == 'EntityType') as XmlElement[];
        
        // Jeden Typ mit dem entsprechenden Generator verarbeiten
        await this.runGeneratorAsync(generators, GeneratorKind.EnumType,    enumTypes,    options);
        await this.runGeneratorAsync(generators, GeneratorKind.ComplexType, complexTypes, options);
        await this.runGeneratorAsync(generators, GeneratorKind.EntityType,  entityTypes,  options);

    }

    /**
     * Führt einen einzelnen Generator für den angegebenen GeneratorKind aus.
     * Ist kein Generator für den Kind registriert, wird er stillschweigend übersprungen.
     * @param generators Map mit den verfügbaren Generatoren
     * @param kind Der zu verarbeitende Generatortyp
     * @param types Liste der zu verarbeitenden XmlElements
     * @param options Konfigurationsoptionen
     */
    private async runGeneratorAsync(
        generators: Map<GeneratorKind, any>,
        kind: GeneratorKind,
        types: XmlElement[],
        options: GeneratorOptions): Promise<void> {
            
        const generator = generators.get(kind);

        // Kein Generator registriert → überspringen statt Exception
        if (!generator) {
            console.log(`[GeneratorService] Kein Generator für ${kind} registriert — wird übersprungen.`);
            return;
        }

        await generator.generateAsync(types, options);
        
    };

    /**
     * Lädt und parst die EDMX-Datei und gibt das Schema-Element zurück.
     * Unterstützt sowohl OData V3 als auch V4 Schemas.
     * @param metadataFile Pfad zur EDMX-Datei
     * @returns Schema XmlElement
     * @throws {GeneratorException} Wenn kein gültiges Schema gefunden wurde
     */
    private async loadSchema(metadataFile: string): Promise<XmlElement> {
        
        const content = await fs.promises.readFile(metadataFile, 'utf-8');
        const document = XmlParser.parse(content);

        const schema = this.findSchema(document.getRootElement());

        if (!schema)
            throw new Error("Schema element not found in the metadata file.");

        return schema;

    }

    /**
     * Sucht rekursiv nach dem Schema-Element im XML-Dokument
     * @param element Startelement für die Suche
     * @returns Schema XmlElement oder undefined
     */
    private findSchema(element: XmlElement): XmlElement | undefined {
        
        if (element.tagName === "Schema") {
            return element;
        }

        for (const child of element.children) {
            if (child instanceof XmlElement) {
                const found = this.findSchema(child);
                if (found) return found;
            }
        }

        return undefined;
    }
};
# B1SLayer.ModelGenerator

A Node.js command-line tool that automatically generates strongly-typed **TypeScript** types directly from your SAP Business One Service Layer OData V4 metadata file (EDMX).

Instead of manually writing and maintaining hundreds of model types, `B1SLayer.ModelGenerator` reads the metadata and creates a separate, ready-to-use file for each type — EnumTypes, ComplexTypes and EntityTypes included.

---

## Features

- Generates TypeScript types from OData V4 EDMX metadata files
- Creates one file per type (EnumType, ComplexType, EntityType)
- Handles `Collection(...)` types → `T[]`
- Handles `Nullable` attributes correctly per OData specification
- Strips namespace prefixes (e.g. `SAPB1.TeamMember` → `TeamMember`)
- Automatically generates `import` statements for referenced types
- Filter generated types with `--include` and `--exclude`

---

## Requirements

- [Node.js 18+](https://nodejs.org)
- [npm](https://www.npmjs.com)

---

## Installation

```bash
npm install -g b1slayer-model-generator
```

Or clone and build from source:

```bash
git clone https://github.com/SoftwareDesign-Solution/b1slayer-model-generator-node.git
cd b1slayer-model-generator-node
npm install
npm run build
```

---

## Usage

```bash
b1slayer-model-generator \
  --metadatafile servicelayer_metadata_v4.xml \
  --namespace Example.Dto \
  --outputdir ./models \
  --language ts
```

---

## Command-Line Options

| Option | Short | Required | Description |
| --- | --- | --- | --- |
| `--metadatafile` | `-m` | ✅ | Path to the OData V4 EDMX metadata file |
| `--namespace` | `-n` | ✅ | Target namespace for generated types |
| `--outputdir` | `-o` | ✅ | Output directory for generated files |
| `--language` | `-l` | ✅ | Target language: `TypeScript` / `ts` |
| `--include` | | ❌ | Only generate these types (comma- or space-separated) |
| `--exclude` | | ❌ | Skip these types (comma- or space-separated) |

---

## Examples

### Generate TypeScript types

```bash
b1slayer-model-generator \
  --metadatafile servicelayer_metadata_v4.xml \
  --namespace Example.Dto \
  --outputdir ./models \
  --language ts
```

### Only generate specific types

```bash
b1slayer-model-generator \
  --metadatafile servicelayer_metadata_v4.xml \
  --namespace Example.Dto \
  --outputdir ./models \
  --language ts \
  --include Document,BusinessPartner,DocumentLine
```

### Exclude specific types

```bash
b1slayer-model-generator \
  --metadatafile servicelayer_metadata_v4.xml \
  --namespace Example.Dto \
  --outputdir ./models \
  --language ts \
  --exclude BPAddress
```

### Combine include and exclude

```bash
# Of Document, BusinessPartner and BPAddress — generate only Document and BusinessPartner
b1slayer-model-generator \
  --metadatafile servicelayer_metadata_v4.xml \
  --namespace Example.Dto \
  --outputdir ./models \
  --language ts \
  --include Document,BusinessPartner,BPAddress \
  --exclude BPAddress
```

---

## Output

Each type from the metadata file gets its own `.ts` file in the output directory:

```text
models/
├── BoStatus.ts              ← EnumType
├── BoYesNoEnum.ts           ← EnumType
├── BPAddress.ts             ← ComplexType
├── DocumentLine.ts          ← ComplexType
├── Document.ts              ← EntityType
├── BusinessPartner.ts       ← EntityType
└── ...
```

### Enum Example Output

```typescript
export enum BoStatus {
    Open = 1,
    Closed = 2,
    Cancelled = 3,
}
```

### Type Example Output

TypeScript types automatically include `import` statements for all referenced types:

```typescript
import type { DocumentLine } from "./DocumentLine";
import type { BPAddress } from "./BPAddress";

export type Document = {
    DocEntry: number;
    DocNum: number | null;
    CardCode: string | null;
    DocDate: Date;
    DocDueDate: Date | null;
    DocumentLines: DocumentLine[] | null;
    ShipToAddress: BPAddress | null;
}
```

---

## EDM to TypeScript Type Mapping

| EDM Type | TypeScript Type (Nullable=false) | TypeScript Type (Nullable=true) |
| --- | --- | --- |
| `Edm.String` | `string` | `string \| null` |
| `Edm.Int16` / `Int32` / `Int64` | `number` | `number \| null` |
| `Edm.Decimal` / `Double` / `Single` | `number` | `number \| null` |
| `Edm.Boolean` | `boolean` | `boolean \| null` |
| `Edm.DateTime` / `DateTimeOffset` | `Date` | `Date \| null` |
| `Edm.Guid` | `string` | `string \| null` |
| `Edm.Binary` | `Uint8Array` | `Uint8Array \| null` |
| `Collection(T)` | `T[]` | `T[] \| null` |

---

## Nullable Handling

The OData specification defines `Nullable=true` as the default when the attribute is not present.

| EDMX | TypeScript |
| --- | --- |
| `Nullable="false"` | `DocEntry: number` |
| `Nullable="true"` | `DocNum: number \| null` |
| *(not set)* | `DocNum: number \| null` |

---

## Import Generation

TypeScript types automatically include `import` statements for all referenced types with a namespace prefix (e.g. `SAPB1.*`). Standard OData types (`Edm.*`) are never imported.

```xml
<!-- Generates an import -->
<Property Name="DocumentLines" Type="Collection(SAPB1.DocumentLine)"/>
<Property Name="ShipToAddress" Type="SAPB1.BPAddress"/>

<!-- No import generated -->
<Property Name="DocEntry"  Type="Edm.Int32"/>
<Property Name="StartTime" Type="Edm.TimeOfDay"/>
```

---

## Include / Exclude Filter Logic

| Include | Exclude | Result |
| --- | --- | --- |
| *(empty)* | *(empty)* | All types are generated |
| `BusinessPartner, Document` | *(empty)* | Only BusinessPartner and Document |
| *(empty)* | `BusinessPartner` | Everything except BusinessPartner |
| `BusinessPartner, Document, BPAddress` | `BPAddress` | Only BusinessPartner and Document |

> `--include` takes precedence. `--exclude` is applied afterwards. Both filters are case-insensitive.

---

## Tech Stack

| | |
| --- | --- |
| **Runtime** | Node.js 18+ |
| **Language** | TypeScript |
| **CLI** | [commander](https://github.com/tj/commander.js) |
| **XML Parsing** | [xml-trueformat](https://github.com/daniel-sc/xml-trueformat) |
| **Tests** | [vitest](https://vitest.dev) |

---

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Run tests
npm test

# Run directly without build
npx ts-node src/index.ts --metadatafile ./data.xml --namespace Example.Dto --outputdir ./models --language ts
```

---

## License

MIT

## Author

**Manuel Kübler** — [mail@softwaredesign-solution.de](mailto:mail@softwaredesign-solution.de)
🔗 [github.com/SoftwareDesign-Solution](https://github.com/SoftwareDesign-Solution)

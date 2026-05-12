import type { ElectronicDocProtocolCodeStrEnum } from "./ElectronicDocProtocolCodeStrEnum";
import type { ImportFieldTypeEnum } from "./ImportFieldTypeEnum";

export type ImportDetermination = {
	AbsEntry: number;
	Code: ElectronicDocProtocolCodeStrEnum | null;
	LineNumber: number | null;
	ObjectType: string | null;
	ObjectTypeXPath: string | null;
	FieldType: ImportFieldTypeEnum | null;
	FieldTypeXPath: string | null;
	ImportFormat: number | null;
	DefaultDigitalSeries: number | null;
	VersionNumber: number | null;
}
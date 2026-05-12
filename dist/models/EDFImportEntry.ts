import type { ElectronicDocProtocolCodeStrEnum } from "./ElectronicDocProtocolCodeStrEnum";
import type { ElectronicDocumentEntryStatusEnum } from "./ElectronicDocumentEntryStatusEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type EDFImportEntry = {
	AbsEntry: number | null;
	Code: ElectronicDocProtocolCodeStrEnum | null;
	Status: ElectronicDocumentEntryStatusEnum | null;
	Message: string | null;
	TestMode: string | null;
	GUID: string | null;
	Authority: string | null;
	ProcessingSource: string | null;
	MetaData: string | null;
	CreateDate: Date | null;
	CreateTime: number | null;
	UpdateDate: Date | null;
	UpdateTime: number | null;
	User: number | null;
	User2: number | null;
	MimeType: string | null;
	FileName: string | null;
	AssignedID: string | null;
	CardCode: string | null;
	DocumentDate: Date | null;
	ObjectType: string | null;
	IsBPManual: BoYesNoEnum | null;
}
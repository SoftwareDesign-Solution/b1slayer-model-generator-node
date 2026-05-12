import type { ElectronicDocumentEntryLogTypeEnum } from "./ElectronicDocumentEntryLogTypeEnum";
import type { ElectronicDocumentAuthorityProcessEnum } from "./ElectronicDocumentAuthorityProcessEnum";

export type EDFEntryLog = {
	AbsEntry: number | null;
	LogNumber: number | null;
	LogType: ElectronicDocumentEntryLogTypeEnum | null;
	LogMessage: string | null;
	LogData: string | null;
	LogOperationDate: Date | null;
	LogOperationTime: number | null;
	ExportFormat: number | null;
	ExportFile: string | null;
	AuthorityProcess: ElectronicDocumentAuthorityProcessEnum | null;
}
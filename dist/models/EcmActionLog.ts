import type { EcmActionLogTypeEnum } from "./EcmActionLogTypeEnum";
import type { ElectronicDocumentAuthorityProcessEnum } from "./ElectronicDocumentAuthorityProcessEnum";

export type EcmActionLog = {
	ActionID: number | null;
	LogID: number | null;
	Type: EcmActionLogTypeEnum | null;
	Message: string | null;
	Data: string | null;
	LogDate: Date | null;
	LogTime: number | null;
	ExportFormat: number | null;
	ExportFile: string | null;
	AuthorityProcess: ElectronicDocumentAuthorityProcessEnum | null;
}
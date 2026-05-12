import type { ElectronicDocProtocolCodeStrEnum } from "./ElectronicDocProtocolCodeStrEnum";
import type { ElectronicDocumentEntryLogTypeEnum } from "./ElectronicDocumentEntryLogTypeEnum";
import type { ElectronicDocumentBlobContentTypeEnum } from "./ElectronicDocumentBlobContentTypeEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { ElectronicDocumentAuthorityProcessEnum } from "./ElectronicDocumentAuthorityProcessEnum";

export type EDFEntryAddLogInputParams = {
	Code: ElectronicDocProtocolCodeStrEnum | null;
	GUID: string | null;
	LogType: ElectronicDocumentEntryLogTypeEnum | null;
	LogMessage: string | null;
	LogData: string | null;
	ExportFormat: number | null;
	LogDataContentType: ElectronicDocumentBlobContentTypeEnum | null;
	ZipLogData: BoYesNoEnum | null;
	ExportFile: string | null;
	AuthorityProcess: ElectronicDocumentAuthorityProcessEnum | null;
}
import type { ElectronicDocProtocolCodeStrEnum } from "./ElectronicDocProtocolCodeStrEnum";
import type { ElectronicDocumentEntryLogTypeEnum } from "./ElectronicDocumentEntryLogTypeEnum";
import type { ElectronicDocumentBlobContentTypeEnum } from "./ElectronicDocumentBlobContentTypeEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type EDFEntryLogInputParams = {
	Code: ElectronicDocProtocolCodeStrEnum | null;
	GUID: string | null;
	LogType: ElectronicDocumentEntryLogTypeEnum | null;
	FileName: string | null;
	LogDataContentType: ElectronicDocumentBlobContentTypeEnum | null;
	UnzipLogData: BoYesNoEnum | null;
	KeepLogDataPrefix: BoYesNoEnum | null;
}
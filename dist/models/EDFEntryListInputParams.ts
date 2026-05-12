import type { ElectronicDocProtocolCodeStrEnum } from "./ElectronicDocProtocolCodeStrEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { ElectronicDocProcessingTargetEnum } from "./ElectronicDocProcessingTargetEnum";

export type EDFEntryListInputParams = {
	Code: ElectronicDocProtocolCodeStrEnum | null;
	StoreEntryTypeSet: string | null;
	StoreEntryStatusSet: string | null;
	MaxLines: number | null;
	BranchID: number | null;
	FromDate: Date | null;
	FromTime: number | null;
	ToDate: Date | null;
	ToTime: number | null;
	FromEntryID: number | null;
	Ascending: BoYesNoEnum | null;
	CancellationStatusSet: string | null;
	ProcessingTarget: ElectronicDocProcessingTargetEnum | null;
	ProcessingTargetStr: string | null;
}
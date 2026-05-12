import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { BoSoStatus } from "./BoSoStatus";
import type { BoAPARDocumentTypes } from "./BoAPARDocumentTypes";

export type SalesOpportunitiesLine = {
	LineNum: number | null;
	SalesPerson: number | null;
	StartDate: Date | null;
	ClosingDate: Date | null;
	StageKey: number | null;
	PercentageRate: number | null;
	MaxLocalTotal: number | null;
	MaxSystemTotal: number | null;
	Remarks: string | null;
	Contact: BoYesNoEnum | null;
	Status: BoSoStatus | null;
	WeightedAmountLocal: number | null;
	WeightedAmountSystem: number | null;
	DocumentNumber: number | null;
	DocumentType: BoAPARDocumentTypes | null;
	DocumentCheckbox: BoYesNoEnum | null;
	ContactPerson: number | null;
	BPChanelName: string | null;
	BPChanelCode: string | null;
	SequenceNo: number | null;
	DataOwnershipfield: number | null;
	BPChannelContact: number | null;
}
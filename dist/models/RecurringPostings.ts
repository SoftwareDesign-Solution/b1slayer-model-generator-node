import type { BoFrequencyTypeEnum } from "./BoFrequencyTypeEnum";
import type { BoSubFrequencyTypeEnum } from "./BoSubFrequencyTypeEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { RecurringPostingsLine } from "./RecurringPostingsLine";
import type { RecurringPostingsDocumentReference } from "./RecurringPostingsDocumentReference";

export type RecurringPostings = {
	Code: string;
	Description: string | null;
	Instance: number;
	Reference1: string | null;
	Reference2: string | null;
	Reference3: string | null;
	TransactionCode: string | null;
	Remarks: string | null;
	Frequency: BoFrequencyTypeEnum | null;
	SubFrequency: BoSubFrequencyTypeEnum | null;
	NextExecution: Date | null;
	StampTax: BoYesNoEnum | null;
	AutomaticVAT: BoYesNoEnum | null;
	ManageWTax: BoYesNoEnum | null;
	DeferredTax: BoYesNoEnum | null;
	ValidUntil: BoYesNoEnum | null;
	ValidUntilDate: Date | null;
	RecurringPostingsLineCollection: RecurringPostingsLine[] | null;
	RecurringPostingsDocumentReferenceCollection: RecurringPostingsDocumentReference[] | null;
}
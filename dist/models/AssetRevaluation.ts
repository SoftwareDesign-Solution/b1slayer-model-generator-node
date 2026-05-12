import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { AssetRevaluationLine } from "./AssetRevaluationLine";

export type AssetRevaluation = {
	DocEntry: number;
	DocNum: number | null;
	Series: number | null;
	PostingDate: Date | null;
	AssetValueDate: Date | null;
	Reference: string | null;
	Remarks: string | null;
	JournalRemarks: string | null;
	DepreciationArea: string | null;
	TransId: number | null;
	HandWritten: BoYesNoEnum | null;
	PeriodIndicator: string | null;
	DocumentDate: Date | null;
	BPLId: number | null;
	BPLName: string | null;
	VATRegNum: string | null;
	RevaluationPercent: number | null;
	IfrsPosting: BoYesNoEnum | null;
	SummerizeByProjects: BoYesNoEnum | null;
	SummerizeByDistributionRules: BoYesNoEnum | null;
	AssetRevaluationLineCollection: AssetRevaluationLine[] | null;
}
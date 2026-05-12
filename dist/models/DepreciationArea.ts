import type { PostingOfDepreciationEnum } from "./PostingOfDepreciationEnum";
import type { RetirementMethodEnum } from "./RetirementMethodEnum";
import type { AreaTypeEnum } from "./AreaTypeEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type DepreciationArea = {
	Code: string;
	Description: string | null;
	PostingOfDepreciation: PostingOfDepreciationEnum | null;
	RetirementMethod: RetirementMethodEnum | null;
	AreaType: AreaTypeEnum | null;
	DerivedArea: string | null;
	MainBookingArea: BoYesNoEnum | null;
	DirectRevenuePosting: BoYesNoEnum | null;
	TaxCreditControl: BoYesNoEnum | null;
	TaxType: number | null;
	BPForTaxCorrection: string | null;
	ItemForTaxCorrection: string | null;
	UsageForTaxCorrection: number | null;
}
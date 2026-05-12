import type { BlanketAgreementDatePeriodsEnum } from "./BlanketAgreementDatePeriodsEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type BlanketAgreements_DetailsLine = {
	AgreementNo: number | null;
	AgreementRowNumber: number | null;
	AgreementEffectiveRowNumber: number | null;
	Frequency: BlanketAgreementDatePeriodsEnum | null;
	From: Date | null;
	To: Date | null;
	ReleaseInformation: string | null;
	Quantity: number | null;
	Warehouse: string | null;
	FreeText: string | null;
	ConsumeSalesForecast: BoYesNoEnum | null;
	PlannedAmountLC: number | null;
	PlannedAmountFC: number | null;
}
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { PeriodStatusEnum } from "./PeriodStatusEnum";

export type FinancePeriod = {
	AbsoluteEntry: number | null;
	PeriodCode: string | null;
	PeriodName: string | null;
	PostingDateFrom: Date | null;
	PostingDateTo: Date | null;
	ValueDateFrom: Date | null;
	ValueDateTo: Date | null;
	TaxDateFrom: Date | null;
	TaxDateTo: Date | null;
	ActiveforFeed: BoYesNoEnum | null;
	Locked: BoYesNoEnum | null;
	AdditionalSubPeriods: BoYesNoEnum | null;
	PeriodIndicator: string | null;
	SubNum: number | null;
	PeriodStatus: PeriodStatusEnum | null;
}
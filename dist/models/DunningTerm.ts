import type { GroupingMethodEnum } from "./GroupingMethodEnum";
import type { CalculateInterestMethodEnum } from "./CalculateInterestMethodEnum";
import type { ExchangeRateSelectEnum } from "./ExchangeRateSelectEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { AutomaticPostingEnum } from "./AutomaticPostingEnum";
import type { BaseDateSelectEnum } from "./BaseDateSelectEnum";
import type { DunningTermLine } from "./DunningTermLine";

export type DunningTerm = {
	Code: string;
	Name: string | null;
	GroupingMethod: GroupingMethodEnum | null;
	DaysInYear: number | null;
	DaysInMonth: number | null;
	CalculateInterestMethod: CalculateInterestMethodEnum | null;
	ExchangeRateSelect: ExchangeRateSelectEnum | null;
	YearlyInterestRate: number | null;
	LetterFee: number | null;
	LetterFeeCurrency: string | null;
	MinimumBalance: number | null;
	MinimumBalanceCurrency: string | null;
	IncludeInterest: BoYesNoEnum | null;
	ApplyHighestLetterTemplate: BoYesNoEnum | null;
	AutomaticPosting: AutomaticPostingEnum | null;
	InterestAccount: string | null;
	FeeAccount: string | null;
	BaseDateSelect: BaseDateSelectEnum | null;
	DunningTermLines: DunningTermLine[] | null;
}
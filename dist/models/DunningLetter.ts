import type { BoYesNoEnum } from "./BoYesNoEnum";

export type DunningLetter = {
	FeeCurrency: string | null;
	RowNumber: number;
	LetterFormat: string | null;
	Effectiveafter: string | null;
	MinimumBalanceCurrency: string | null;
	Feeperletter: number | null;
	CalcInterest: BoYesNoEnum | null;
	MinimumBalance: number | null;
}
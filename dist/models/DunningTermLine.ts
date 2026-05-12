import type { DunningLetterTypeEnum } from "./DunningLetterTypeEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type DunningTermLine = {
	LevelNum: number | null;
	LetterFormat: DunningLetterTypeEnum | null;
	Effectiveafter: string | null;
	LetterFee: number | null;
	LetterFeeCurrency: string | null;
	MininumBalance: number | null;
	MininumBalanceCurrency: string | null;
	CalculateInterest: BoYesNoEnum | null;
}
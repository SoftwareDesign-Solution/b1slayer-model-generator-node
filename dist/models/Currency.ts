import type { CurrenciesDecimalsEnum } from "./CurrenciesDecimalsEnum";
import type { RoundingSysEnum } from "./RoundingSysEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type Currency = {
	Code: string;
	Name: string | null;
	DocumentsCode: string | null;
	InternationalDescription: string | null;
	HundredthName: string | null;
	EnglishName: string | null;
	EnglishHundredthName: string | null;
	PluralInternationalDescription: string | null;
	PluralHundredthName: string | null;
	PluralEnglishName: string | null;
	PluralEnglishHundredthName: string | null;
	Decimals: CurrenciesDecimalsEnum | null;
	Rounding: RoundingSysEnum | null;
	RoundingInPayment: BoYesNoEnum | null;
	MaxIncomingAmtDiff: number | null;
	MaxOutgoingAmtDiff: number | null;
	MaxIncomingAmtDiffPercent: number | null;
	MaxOutgoingAmtDiffPercent: number | null;
}
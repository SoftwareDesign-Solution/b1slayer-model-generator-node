import type { WTDDetailType } from "./WTDDetailType";

export type WTDBP = {
	BPKeyPart1: string | null;
	BPKeyPart2: string | null;
	WTaxCode: string | null;
	EffectiveDateFrom: Date | null;
	EffectiveDateTo: Date | null;
	Rate: number | null;
	DetailType: WTDDetailType | null;
}
import type { WTDValueRange } from "./WTDValueRange";

export type WTDEffectiveDate = {
	LineNumber: number | null;
	EffectiveFrom: Date | null;
	Rate: number | null;
	WTDValueRangeCollection: WTDValueRange[] | null;
}
import type { RoundingContextEnum } from "./RoundingContextEnum";

export type DecimalData = {
	Value: number | null;
	Context: RoundingContextEnum | null;
	Currency: string | null;
}
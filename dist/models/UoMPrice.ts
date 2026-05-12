import type { BoYesNoEnum } from "./BoYesNoEnum";

export type UoMPrice = {
	PriceList: number | null;
	UoMEntry: number | null;
	ReduceBy: number | null;
	Price: number | null;
	Currency: string | null;
	AdditionalReduceBy1: number | null;
	AdditionalPrice1: number | null;
	AdditionalCurrency1: string | null;
	AdditionalReduceBy2: number | null;
	AdditionalPrice2: number | null;
	AdditionalCurrency2: string | null;
	Auto: BoYesNoEnum | null;
}
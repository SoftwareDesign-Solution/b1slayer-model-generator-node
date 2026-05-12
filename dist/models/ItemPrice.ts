import type { UoMPrice } from "./UoMPrice";

export type ItemPrice = {
	PriceList: number | null;
	Price: number | null;
	Currency: string | null;
	AdditionalPrice1: number | null;
	AdditionalCurrency1: string | null;
	AdditionalPrice2: number | null;
	AdditionalCurrency2: string | null;
	BasePriceList: number | null;
	Factor: number | null;
	UoMPrices: UoMPrice[] | null;
}
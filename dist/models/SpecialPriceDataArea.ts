import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { SpecialPriceQuantityArea } from "./SpecialPriceQuantityArea";

export type SpecialPriceDataArea = {
	PriceCurrency: string | null;
	AutoUpdate: BoYesNoEnum | null;
	Dateto: Date | null;
	Discount: number | null;
	SpecialPrice: number | null;
	DateFrom: Date | null;
	BPCode: string | null;
	PriceListNo: number | null;
	ItemNo: string | null;
	RowNumber: number | null;
	SpecialPriceQuantityAreas: SpecialPriceQuantityArea[] | null;
}
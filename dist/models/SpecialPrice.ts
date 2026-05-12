import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { SourceCurrencyEnum } from "./SourceCurrencyEnum";
import type { SpecialPriceDataArea } from "./SpecialPriceDataArea";

export type SpecialPrice = {
	ItemCode: string;
	CardCode: string;
	Price: number | null;
	Currency: string | null;
	DiscountPercent: number | null;
	PriceListNum: number | null;
	AutoUpdate: BoYesNoEnum | null;
	SourcePrice: SourceCurrencyEnum | null;
	Valid: BoYesNoEnum | null;
	ValidFrom: Date | null;
	ValidTo: Date | null;
	SpecialPriceDataAreas: SpecialPriceDataArea[] | null;
}
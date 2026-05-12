import type { BoRoundingMethod } from "./BoRoundingMethod";
import type { BoPriceListGroupNum } from "./BoPriceListGroupNum";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { BoRoundingRule } from "./BoRoundingRule";

export type PriceList = {
	RoundingMethod: BoRoundingMethod | null;
	GroupNum: BoPriceListGroupNum | null;
	BasePriceList: number | null;
	Factor: number | null;
	PriceListNo: number;
	PriceListName: string | null;
	IsGrossPrice: BoYesNoEnum | null;
	Active: BoYesNoEnum | null;
	ValidFrom: Date | null;
	ValidTo: Date | null;
	DefaultPrimeCurrency: string | null;
	DefaultAdditionalCurrency1: string | null;
	DefaultAdditionalCurrency2: string | null;
	RoundingRule: BoRoundingRule | null;
	FixedAmount: number | null;
}
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { DiscountLine } from "./DiscountLine";

export type CashDiscount = {
	Code: string;
	Name: string | null;
	ByDate: BoYesNoEnum | null;
	Freight: BoYesNoEnum | null;
	Tax: BoYesNoEnum | null;
	DiscountLines: DiscountLine[] | null;
}
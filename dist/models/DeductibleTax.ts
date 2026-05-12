import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { BoVatCategoryEnum } from "./BoVatCategoryEnum";

export type DeductibleTax = {
	Code: string;
	Name: string | null;
	Inactive: BoYesNoEnum | null;
	Category: BoVatCategoryEnum | null;
	DeductibleTaxRate: number | null;
}
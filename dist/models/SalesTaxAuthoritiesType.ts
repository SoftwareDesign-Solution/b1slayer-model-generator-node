import type { BoYesNoEnum } from "./BoYesNoEnum";

export type SalesTaxAuthoritiesType = {
	UserSignature: number | null;
	Name: string | null;
	VAT: BoYesNoEnum | null;
	Numerator: number;
	TaxCreditControl: BoYesNoEnum | null;
}
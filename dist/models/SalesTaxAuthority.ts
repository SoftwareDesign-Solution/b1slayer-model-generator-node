import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { TaxDefinition } from "./TaxDefinition";

export type SalesTaxAuthority = {
	UseTaxAccount: string | null;
	UserSignature: number | null;
	Type: number;
	AOrRTaxAccount: string | null;
	Rate: number | null;
	AOrPTaxAccount: string | null;
	NonDeductiblePrecent: number | null;
	NonDeductibleAccount: string | null;
	Name: string | null;
	DeferredTaxAccount: string | null;
	Code: string;
	MinTaxableAmount: number | null;
	MaxTaxableAmount: number | null;
	FlatTaxAmount: number | null;
	InclInPrice: BoYesNoEnum | null;
	Exempt: BoYesNoEnum | null;
	APExpAccount: string | null;
	ARExpAccount: string | null;
	InclInGrossRevenue: BoYesNoEnum | null;
	TextCode: number | null;
	InclInFirstInstallment: BoYesNoEnum | null;
	ReverseChargePercent: number | null;
	SalesTaxRCMAccount: string | null;
	SalesTaxRCMClrAccount: string | null;
	VATExemption: BoYesNoEnum | null;
	VATExemptionBasePercent: number | null;
	VATExemptionPercent: number | null;
	TaxDefinitions: TaxDefinition[] | null;
}
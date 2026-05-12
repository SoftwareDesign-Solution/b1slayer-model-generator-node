import type { BoYesNoEnum } from "./BoYesNoEnum";

export type LineTaxJurisdiction = {
	JurisdictionCode: string | null;
	JurisdictionType: number | null;
	TaxAmount: number | null;
	TaxAmountSC: number | null;
	TaxAmountFC: number | null;
	TaxRate: number | null;
	DocEntry: number | null;
	LineNumber: number | null;
	RowSequence: number | null;
	ExternalCalcTaxRate: number | null;
	ExternalCalcTaxAmount: number | null;
	ExternalCalcTaxAmountFC: number | null;
	ExternalCalcTaxAmountSC: number | null;
	BaseSum: number | null;
	TaxInPrice: BoYesNoEnum | null;
	NonDeductiblePercent: number | null;
	TaxOnReserveInvoice: BoYesNoEnum | null;
	Exempt: BoYesNoEnum | null;
	Unencumbered: BoYesNoEnum | null;
}
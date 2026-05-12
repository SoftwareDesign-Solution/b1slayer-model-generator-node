import type { BoRcptInvTypes } from "./BoRcptInvTypes";

export type PaymentInvoice = {
	LineNum: number | null;
	DocEntry: number | null;
	DocNum: number | null;
	SumApplied: number | null;
	AppliedFC: number | null;
	AppliedSys: number | null;
	DocRate: number | null;
	DocLine: number | null;
	InvoiceType: BoRcptInvTypes | null;
	DiscountPercent: number | null;
	PaidSum: number | null;
	InstallmentId: number | null;
	WitholdingTaxApplied: number | null;
	WitholdingTaxAppliedFC: number | null;
	WitholdingTaxAppliedSC: number | null;
	LinkDate: Date | null;
	DistributionRule: string | null;
	DistributionRule2: string | null;
	DistributionRule3: string | null;
	DistributionRule4: string | null;
	DistributionRule5: string | null;
	TotalDiscount: number | null;
	TotalDiscountFC: number | null;
	TotalDiscountSC: number | null;
}
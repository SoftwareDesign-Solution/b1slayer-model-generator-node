import type { PaymentInvoiceTypeEnum } from "./PaymentInvoiceTypeEnum";

export type PaymentAmountParams = {
	DocType: PaymentInvoiceTypeEnum | null;
	DocEntry: number | null;
	InstallmentId: number | null;
	CashDiscountPercentage: number | null;
	CashDiscountAmount: number | null;
	CashDiscountAmountFC: number | null;
	CashDiscountAmountSC: number | null;
	TotalPaymentAmount: number | null;
	TotalPaymentAmountFC: number | null;
	TotalPaymentAmountSC: number | null;
}
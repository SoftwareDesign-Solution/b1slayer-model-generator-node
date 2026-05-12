export type PurchaseTaxInvoiceLinkedDownPayment = {
	DocEntry: number | null;
	LineNum: number | null;
	DownPaymentType: number | null;
	DownPaymentEntry: number | null;
	DownPaymentNum: number | null;
	PaymentType: number | null;
	PaymentEntry: number | null;
	PaymentNum: number | null;
	PaymentTaxDate: Date | null;
	TransferDate: Date | null;
	TransferReference: string | null;
	AmountToDraw: number | null;
	AmountToDrawFC: number | null;
	AmountToDrawSC: number | null;
	DocCurrency: string | null;
}
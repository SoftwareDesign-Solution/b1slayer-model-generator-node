export type SalesTaxInvoiceLinkedDownPayment = {
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
	Tax: number | null;
	TaxFC: number | null;
	TaxSC: number | null;
	GrossAmountToDraw: number | null;
	GrossAmountToDrawFC: number | null;
	GrossAmountToDrawSC: number | null;
	DocCurrency: string | null;
}
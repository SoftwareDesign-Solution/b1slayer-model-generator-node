export type ChecksforPaymentLine = {
	RowNumber: number | null;
	RowDetails: string | null;
	RowTotal: number | null;
	RowCurrency: string | null;
	TaxDefinition: string | null;
	TaxPercent: number | null;
	CreditedAccount: string | null;
	LineTotal: number | null;
}
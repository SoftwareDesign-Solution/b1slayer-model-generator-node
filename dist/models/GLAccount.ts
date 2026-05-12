export type GLAccount = {
	Code: string | null;
	DueDate: Date | null;
	Debit: number | null;
	Credit: number | null;
	SystemDebit: number | null;
	SystemCredit: number | null;
	ForeignDebit: number | null;
	ForeignCredit: number | null;
	ForeignCurrency: string | null;
}
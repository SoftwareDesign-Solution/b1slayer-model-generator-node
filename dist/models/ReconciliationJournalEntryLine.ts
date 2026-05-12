export type ReconciliationJournalEntryLine = {
	TransactionNumber: number | null;
	LineNumber: number | null;
	PostingDate: Date | null;
	DueDate: Date | null;
	Ref1: string | null;
	Ref2: string | null;
	Ref3: string | null;
	DebitAmount: number | null;
	CreditAmount: number | null;
	Details: string | null;
}
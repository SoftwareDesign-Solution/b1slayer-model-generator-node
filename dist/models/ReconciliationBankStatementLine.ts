export type ReconciliationBankStatementLine = {
	BankStatementAccountCode: string | null;
	Sequence: number | null;
	Date: Date | null;
	Ref1: string | null;
	Amount: number | null;
	Details: string | null;
}
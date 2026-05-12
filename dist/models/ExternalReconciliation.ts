import type { ReconciliationAccountTypeEnum } from "./ReconciliationAccountTypeEnum";
import type { ReconciliationJournalEntryLine } from "./ReconciliationJournalEntryLine";
import type { ReconciliationBankStatementLine } from "./ReconciliationBankStatementLine";

export type ExternalReconciliation = {
	ReconciliationAccountType: ReconciliationAccountTypeEnum | null;
	AccountCode: string | null;
	ReconciliationNo: number | null;
	Amount: number | null;
	CurrencyType: string | null;
	ReconciliationType: string | null;
	ReconciliationDate: Date | null;
	CreationDate: Date | null;
	ReconciliationJournalEntryLines: ReconciliationJournalEntryLine[] | null;
	ReconciliationBankStatementLines: ReconciliationBankStatementLine[] | null;
}
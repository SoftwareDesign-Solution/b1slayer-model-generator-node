import type { ReconciliationAccountTypeEnum } from "./ReconciliationAccountTypeEnum";

export type ExternalReconciliationFilterParams = {
	AccountCodeFrom: string | null;
	AccountCodeTo: string | null;
	ReconciliationDateFrom: Date | null;
	ReconciliationDateTo: Date | null;
	ReconciliationNoFrom: number | null;
	ReconciliationNoTo: number | null;
	ReconciliationAccountType: ReconciliationAccountTypeEnum | null;
}
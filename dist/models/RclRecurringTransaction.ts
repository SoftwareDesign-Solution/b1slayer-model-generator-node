import type { RclRecurringTransactionStatusEnum } from "./RclRecurringTransactionStatusEnum";

export type RclRecurringTransaction = {
	TransactionID: number | null;
	TemplateID: number | null;
	Instance: number | null;
	PlannedDate: Date | null;
	Status: RclRecurringTransactionStatusEnum | null;
	DocType: string | null;
	DocEntry: number | null;
}
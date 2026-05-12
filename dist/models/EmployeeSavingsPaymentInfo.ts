import type { ContractSequenceEnum } from "./ContractSequenceEnum";

export type EmployeeSavingsPaymentInfo = {
	EmployeeID: number | null;
	LineNum: number | null;
	ContractName: string | null;
	PaymentNotes: string | null;
	AN: number | null;
	ANcurrency: string | null;
	AG: number | null;
	AGcurrency: string | null;
	BankName: string | null;
	BankCode: string | null;
	BankAccount: string | null;
	Sequence: ContractSequenceEnum | null;
}
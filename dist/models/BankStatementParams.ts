import type { BankStatementStatusEnum } from "./BankStatementStatusEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type BankStatementParams = {
	InternalNumber: number | null;
	BankAccountKey: number | null;
	StatementNumber: string | null;
	StatementDate: Date | null;
	Status: BankStatementStatusEnum | null;
	Imported: BoYesNoEnum | null;
	StartingBalanceF: number | null;
	EndingBalanceF: number | null;
	Currency: string | null;
	StartingBalanceL: number | null;
	EndingBalanceL: number | null;
}
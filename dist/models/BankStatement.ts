import type { BankStatementStatusEnum } from "./BankStatementStatusEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { BankStatementRow } from "./BankStatementRow";

export type BankStatement = {
	InternalNumber: number;
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
	BankStatementFileHash: string | null;
	BankStatementGUID: string | null;
	BankStatementRows: BankStatementRow[] | null;
}
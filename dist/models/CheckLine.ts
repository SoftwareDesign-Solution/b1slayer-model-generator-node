import type { BoDepositCheckEnum } from "./BoDepositCheckEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type CheckLine = {
	CheckKey: number | null;
	CheckNumber: number | null;
	Bank: string | null;
	Branch: string | null;
	CashCheck: string | null;
	CheckDate: Date | null;
	Customer: string | null;
	CheckAmount: number | null;
	Deposited: BoDepositCheckEnum | null;
	Transferred: BoYesNoEnum | null;
	AccountNumber: string | null;
	CheckCurrency: string | null;
	FiscalID: string | null;
	OriginallyIssuedBy: string | null;
	RejectedByBank: BoYesNoEnum | null;
}
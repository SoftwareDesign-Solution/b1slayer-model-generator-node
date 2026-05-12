import type { BoDepositPostingTypes } from "./BoDepositPostingTypes";

export type BillOfExchangeTransDeposit = {
	DepositNorm: string | null;
	PostingType: BoDepositPostingTypes | null;
	BankCountry: string | null;
	BankAccount: string | null;
	BankDepositAccount: string | null;
	BankBranch: string | null;
}
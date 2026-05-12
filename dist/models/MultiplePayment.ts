import type { BoYesNoEnum } from "./BoYesNoEnum";

export type MultiplePayment = {
	BankStatmentLineID: number | null;
	ListLineID: number | null;
	DocumentIdentifier: string | null;
	AmountLC: number | null;
	AmountFC: number | null;
	IsDebit: BoYesNoEnum | null;
}
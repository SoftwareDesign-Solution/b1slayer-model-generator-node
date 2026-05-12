import type { BoYesNoEnum } from "./BoYesNoEnum";

export type CreditLine = {
	AbsId: number | null;
	CreditCard: number | null;
	VoucherNumber: string | null;
	PaymentMethodCode: number | null;
	PayDate: Date | null;
	Deposited: BoYesNoEnum | null;
	NumOfPayments: number | null;
	Customer: string | null;
	Reference: string | null;
	Transferred: BoYesNoEnum | null;
	Total: number | null;
	CreditCurrency: string | null;
}
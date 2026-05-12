import type { BoRcptCredTypes } from "./BoRcptCredTypes";
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type PaymentCreditCard = {
	LineNum: number | null;
	CreditCard: number | null;
	CreditAcct: string | null;
	CreditCardNumber: string | null;
	CardValidUntil: Date | null;
	VoucherNum: string | null;
	OwnerIdNum: string | null;
	OwnerPhone: string | null;
	PaymentMethodCode: number | null;
	NumOfPayments: number | null;
	FirstPaymentDue: Date | null;
	FirstPaymentSum: number | null;
	AdditionalPaymentSum: number | null;
	CreditSum: number | null;
	CreditCur: string | null;
	CreditRate: number | null;
	ConfirmationNum: string | null;
	NumOfCreditPayments: number | null;
	CreditType: BoRcptCredTypes | null;
	SplitPayments: BoYesNoEnum | null;
}
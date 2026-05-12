import type { InstallmentPaymentsPossiblityEnum } from "./InstallmentPaymentsPossiblityEnum";

export type CreditPaymentMethod = {
	PaymentMethodCode: number;
	Name: string | null;
	AssignedtoCreditCard: number | null;
	PaymentCode: string | null;
	MinimumCreditAmount: number | null;
	MinimumPaymentAmount: number | null;
	MaxQtyWithoutApproval: number | null;
	InstallmentPaymentsPossible: InstallmentPaymentsPossiblityEnum | null;
}
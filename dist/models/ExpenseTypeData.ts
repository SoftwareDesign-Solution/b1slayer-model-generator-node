import type { BoYesNoEnum } from "./BoYesNoEnum";

export type ExpenseTypeData = {
	ExpenseType: string;
	ExpenseName: string | null;
	ExpenseAccount: string | null;
	PaidByCompany: BoYesNoEnum | null;
	VatGroup: string | null;
}
import type { DueDateTypesEnum } from "./DueDateTypesEnum";

export type CreditCardPayment = {
	DueDateCode: string;
	DueDateName: string | null;
	DueDatesType: DueDateTypesEnum | null;
	PaymentAfterDays: number | null;
	PaymentAfterMonths: number | null;
	FromDay1: number | null;
	ToDay1: number | null;
	PaymentDay1: number | null;
	NoOfMonths1: number | null;
	FromDay2: number | null;
	ToDay2: number | null;
	PaymentDay2: number | null;
	NoOfMonths2: number | null;
	FromDay3: number | null;
	ToDay3: number | null;
	PaymentDay3: number | null;
	NoOfMonths3: number | null;
	FromDay4: number | null;
	ToDay4: number | null;
	PaymentDay4: number | null;
	NoOfMonths4: number | null;
}
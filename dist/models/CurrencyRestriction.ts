import type { BoYesNoEnum } from "./BoYesNoEnum";

export type CurrencyRestriction = {
	PaymentMethodCode: string | null;
	CurrencyCode: string | null;
	CurrencyName: string | null;
	Choose: BoYesNoEnum | null;
}
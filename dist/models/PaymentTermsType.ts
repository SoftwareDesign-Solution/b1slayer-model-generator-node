import type { BoPayTermDueTypes } from "./BoPayTermDueTypes";
import type { BoOpenIncPayment } from "./BoOpenIncPayment";
import type { BoBaselineDate } from "./BoBaselineDate";

export type PaymentTermsType = {
	GroupNumber: number;
	PaymentTermsGroupName: string | null;
	StartFrom: BoPayTermDueTypes | null;
	NumberOfAdditionalMonths: number | null;
	NumberOfAdditionalDays: number | null;
	CreditLimit: number | null;
	GeneralDiscount: number | null;
	InterestOnArrears: number | null;
	PriceListNo: number | null;
	LoadLimit: number | null;
	OpenReceipt: BoOpenIncPayment | null;
	DiscountCode: string | null;
	DunningCode: string | null;
	BaselineDate: BoBaselineDate | null;
	NumberOfInstallments: number | null;
	NumberOfToleranceDays: number | null;
	U_VPS_DTV_DATEVID: string | null;
	U_GA_Lastschrift: string | null;
	U_VPS_DTV_EXP: string;
	U_GA_FolgeZahlb: number | null;
	U_GA_Vorkasse: string | null;
}
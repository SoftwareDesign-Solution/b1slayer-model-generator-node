import type { DownPaymentTypeEnum } from "./DownPaymentTypeEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { DownPaymentToDrawDetails } from "./DownPaymentToDrawDetails";

export type DownPaymentToDraw = {
	DocEntry: number | null;
	PostingDate: Date | null;
	DueDate: Date | null;
	Name: string | null;
	Details: string | null;
	AmountToDraw: number | null;
	DownPaymentType: DownPaymentTypeEnum | null;
	AmountToDrawFC: number | null;
	AmountToDrawSC: number | null;
	DocInternalID: number | null;
	RowNum: number | null;
	DocNumber: number | null;
	Tax: number | null;
	TaxFC: number | null;
	TaxSC: number | null;
	GrossAmountToDraw: number | null;
	GrossAmountToDrawFC: number | null;
	GrossAmountToDrawSC: number | null;
	IsGrossLine: BoYesNoEnum | null;
	DownPaymentsToDrawDetails: DownPaymentToDrawDetails[] | null;
}
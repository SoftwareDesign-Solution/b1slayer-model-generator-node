import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { LineTypeEnum } from "./LineTypeEnum";

export type DownPaymentToDrawDetails = {
	DocInternalID: number | null;
	RowNum: number | null;
	SeqNum: number | null;
	DocEntry: number | null;
	VatGroupCode: string | null;
	VatPercent: number | null;
	AmountToDraw: number | null;
	AmountToDrawFC: number | null;
	AmountToDrawSC: number | null;
	Tax: number | null;
	TaxFC: number | null;
	TaxSC: number | null;
	IsGrossLine: BoYesNoEnum | null;
	GrossAmountToDraw: number | null;
	GrossAmountToDrawFC: number | null;
	GrossAmountToDrawSC: number | null;
	LineType: LineTypeEnum | null;
	TaxAdjust: BoYesNoEnum | null;
}
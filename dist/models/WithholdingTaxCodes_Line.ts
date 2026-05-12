import type { ProgressiveTax_Line } from "./ProgressiveTax_Line";
import type { WithholdingTaxCodes_ValueRange_Line } from "./WithholdingTaxCodes_ValueRange_Line";

export type WithholdingTaxCodes_Line = {
	Effectivefrom: Date | null;
	Rate: number | null;
	TDSRate: number | null;
	SurchargeRate: number | null;
	CessRate: number | null;
	HSCRate: number | null;
	IGSTRate: number | null;
	CGSTRate: number | null;
	SGSTRate: number | null;
	UTGSTRate: number | null;
	CessGSTRate: number | null;
	LineNum: number | null;
	UoMEntry: number | null;
	UoMCode: string | null;
	FixedAmount: number | null;
	Currency: string | null;
	ITRNonCompliantRate: number | null;
	PANNonCompliantRate: number | null;
	ProgressiveTax_Lines: ProgressiveTax_Line[] | null;
	WithholdingTaxCodes_ValueRange_Lines: WithholdingTaxCodes_ValueRange_Line[] | null;
}
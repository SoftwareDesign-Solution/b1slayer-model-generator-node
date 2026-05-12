import type { BoDocSpecialLineType } from "./BoDocSpecialLineType";

export type DocumentSpecialLine = {
	LineNum: number | null;
	AfterLineNumber: number | null;
	OrderNumber: number | null;
	LineType: BoDocSpecialLineType | null;
	Subtotal: number | null;
	LineText: string | null;
	SubtotalFC: number | null;
	SubtotalSC: number | null;
	TaxAmount: number | null;
	TaxAmountFC: number | null;
	TaxAmountSC: number | null;
	Freight1: number | null;
	Freight1FC: number | null;
	Freight1SC: number | null;
	Freight2: number | null;
	Freight2FC: number | null;
	Freight2SC: number | null;
	Freight3: number | null;
	Freight3FC: number | null;
	Freight3SC: number | null;
	GrossTotal: number | null;
	GrossTotalFC: number | null;
	GrossTotalSC: number | null;
}
import type { FIFOLayer } from "./FIFOLayer";
import type { SNBLines } from "./SNBLines";

export type MaterialRevaluationLine = {
	LineNum: number | null;
	ItemCode: string | null;
	ItemDescription: string | null;
	Quantity: number | null;
	Price: number | null;
	WarehouseCode: string | null;
	ActualPrice: number | null;
	OnHand: number | null;
	DebitCredit: number | null;
	DocEntry: number | null;
	RevaluationDecrementAccount: string | null;
	RevaluationIncrementAccount: string | null;
	RevalAmountToStock: number | null;
	Project: string | null;
	DistributionRule: string | null;
	DistributionRule2: string | null;
	DistributionRule3: string | null;
	DistributionRule4: string | null;
	DistributionRule5: string | null;
	FIFOLayers: FIFOLayer[] | null;
	SNBLinesCollection: SNBLines[] | null;
}
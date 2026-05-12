import type { DepreciationCalculationBaseEnum } from "./DepreciationCalculationBaseEnum";

export type DepreciationLevel = {
	Level: number | null;
	DepreciationCalculationBase: DepreciationCalculationBaseEnum | null;
	NumberOfYears: number | null;
	Percentage: number | null;
	Amount: number | null;
}
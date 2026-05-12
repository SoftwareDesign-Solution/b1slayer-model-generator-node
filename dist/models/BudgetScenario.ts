import type { BoRoundingMethod } from "./BoRoundingMethod";

export type BudgetScenario = {
	Name: string | null;
	InitialRatioPercentage: number | null;
	StartofFiscalYear: Date | null;
	BasicBudget: number | null;
	Numerator: number;
	RoundingMethod: BoRoundingMethod | null;
	Project: string | null;
	DistributionRule: string | null;
	DistributionRule2: string | null;
	DistributionRule3: string | null;
	DistributionRule4: string | null;
	DistributionRule5: string | null;
	U_COR_OcrCode: string | null;
	U_COR_PrjCode: string | null;
}
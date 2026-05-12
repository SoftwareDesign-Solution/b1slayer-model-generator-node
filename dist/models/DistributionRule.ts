import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { DistributionRuleLine } from "./DistributionRuleLine";

export type DistributionRule = {
	FactorCode: string;
	FactorDescription: string | null;
	TotalFactor: number | null;
	Direct: string | null;
	InWhichDimension: number | null;
	Active: BoYesNoEnum | null;
	IsFixedAmount: BoYesNoEnum | null;
	DistributionRuleLines: DistributionRuleLine[] | null;
}
import type { LandedCostAllocationByEnum } from "./LandedCostAllocationByEnum";
import type { LCCostTypeEnum } from "./LCCostTypeEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { LandedCostCostCategoryEnum } from "./LandedCostCostCategoryEnum";

export type LandedCost_CostLine = {
	DocEntry: number | null;
	LandedCostCode: string | null;
	AllocationBy: LandedCostAllocationByEnum | null;
	Amount: number | null;
	AmountFC: number | null;
	Factor: number | null;
	CostType: LCCostTypeEnum | null;
	IncludeForCustoms: BoYesNoEnum | null;
	OpenAmount: number | null;
	OpenAmountFC: number | null;
	Broker: string | null;
	BrokerName: string | null;
	CostCategory: LandedCostCostCategoryEnum | null;
}
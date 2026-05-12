import type { BoYesNoEnum } from "./BoYesNoEnum";

export type ProfitCenter = {
	CenterCode: string;
	CenterName: string | null;
	GroupCode: string | null;
	InWhichDimension: number | null;
	CostCenterType: string | null;
	EffectiveFrom: Date | null;
	EffectiveTo: Date | null;
	Active: BoYesNoEnum | null;
	CenterOwner: number | null;
}
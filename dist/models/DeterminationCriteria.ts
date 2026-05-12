import type { BoYesNoEnum } from "./BoYesNoEnum";

export type DeterminationCriteria = {
	DmcId: number;
	DeterminationCriteriaProperty: string | null;
	IsActive: BoYesNoEnum | null;
	Priority: number | null;
}
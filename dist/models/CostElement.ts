import type { BoYesNoEnum } from "./BoYesNoEnum";

export type CostElement = {
	Code: string;
	Description: string | null;
	IsActive: BoYesNoEnum | null;
}
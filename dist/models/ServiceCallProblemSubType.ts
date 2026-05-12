import type { BoYesNoEnum } from "./BoYesNoEnum";

export type ServiceCallProblemSubType = {
	ProblemSubTypeID: number;
	Name: string | null;
	Description: string | null;
	Active: BoYesNoEnum | null;
}
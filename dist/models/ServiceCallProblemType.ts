import type { BoYesNoEnum } from "./BoYesNoEnum";

export type ServiceCallProblemType = {
	ProblemTypeID: number;
	Name: string | null;
	Description: string | null;
	Active: BoYesNoEnum | null;
}
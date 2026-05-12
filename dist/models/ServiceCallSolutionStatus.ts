import type { BoYesNoEnum } from "./BoYesNoEnum";

export type ServiceCallSolutionStatus = {
	StatusId: number;
	Name: string | null;
	Description: string | null;
	Active: BoYesNoEnum | null;
}
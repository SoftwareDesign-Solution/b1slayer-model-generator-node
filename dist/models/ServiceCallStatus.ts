import type { BoYesNoEnum } from "./BoYesNoEnum";

export type ServiceCallStatus = {
	StatusId: number;
	Name: string | null;
	Description: string | null;
	Active: BoYesNoEnum | null;
}
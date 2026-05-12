import type { BoYesNoEnum } from "./BoYesNoEnum";

export type ServiceCallType = {
	CallTypeID: number;
	Name: string | null;
	Description: string | null;
	Active: BoYesNoEnum | null;
}
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type ServiceCallOrigin = {
	OriginID: number;
	Name: string | null;
	Description: string | null;
	Active: BoYesNoEnum | null;
}
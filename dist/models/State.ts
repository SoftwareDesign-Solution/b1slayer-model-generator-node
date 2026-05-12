import type { BoYesNoEnum } from "./BoYesNoEnum";

export type State = {
	Code: string;
	Country: string;
	Name: string | null;
	GSTCode: string | null;
	IsUnionTerritory: BoYesNoEnum | null;
}
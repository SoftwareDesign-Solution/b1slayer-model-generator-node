import type { BoYesNoEnum } from "./BoYesNoEnum";

export type Territory = {
	TerritoryID: number;
	Description: string | null;
	LocationIndex: number | null;
	Inactive: BoYesNoEnum | null;
	Parent: number | null;
}
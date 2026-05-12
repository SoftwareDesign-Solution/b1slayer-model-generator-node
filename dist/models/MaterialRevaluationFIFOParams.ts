import type { BoYesNoEnum } from "./BoYesNoEnum";

export type MaterialRevaluationFIFOParams = {
	ItemCode: string | null;
	LocationType: string | null;
	LocationCode: string | null;
	ShowIssuedLayers: BoYesNoEnum | null;
}
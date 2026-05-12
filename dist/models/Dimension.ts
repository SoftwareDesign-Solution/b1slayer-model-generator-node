import type { BoYesNoEnum } from "./BoYesNoEnum";

export type Dimension = {
	DimensionCode: number;
	DimensionName: string | null;
	IsActive: BoYesNoEnum | null;
	DimensionDescription: string | null;
}
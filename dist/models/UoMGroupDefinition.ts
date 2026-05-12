import type { BoYesNoEnum } from "./BoYesNoEnum";

export type UoMGroupDefinition = {
	AlternateUoM: number | null;
	AlternateQuantity: number | null;
	BaseQuantity: number | null;
	WeightFactor: number | null;
	UdfFactor: number | null;
	Active: BoYesNoEnum | null;
}
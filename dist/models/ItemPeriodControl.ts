import type { BoYesNoEnum } from "./BoYesNoEnum";

export type ItemPeriodControl = {
	FiscalYear: string | null;
	DepreciationArea: string | null;
	SubPeriod: number | null;
	DepreciationStatus: BoYesNoEnum | null;
	Factor: number | null;
	ActualUnits: number | null;
}
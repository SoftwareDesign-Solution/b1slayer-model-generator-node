import type { BoYesNoEnum } from "./BoYesNoEnum";

export type ItemCycleCount = {
	CycleCode: number | null;
	Alert: BoYesNoEnum | null;
	NextCountingDate: Date | null;
	AlertTime: TimeOfDay | null;
	DestinationUser: number | null;
	WarehouseCode: string | null;
}
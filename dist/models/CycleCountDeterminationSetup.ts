import type { BoYesNoEnum } from "./BoYesNoEnum";

export type CycleCountDeterminationSetup = {
	WarehouseCode: string | null;
	Entry: number | null;
	CycleCode: number | null;
	Alert: BoYesNoEnum | null;
	DestinationUser: number | null;
	NextCountingDate: Date | null;
	Time: TimeOfDay | null;
	ExcludeItemsWithZeroQuantity: BoYesNoEnum | null;
	ChangeExistingItems: BoYesNoEnum | null;
}
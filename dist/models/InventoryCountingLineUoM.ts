import type { CounterTypeEnum } from "./CounterTypeEnum";
import type { MultipleCounterRoleEnum } from "./MultipleCounterRoleEnum";

export type InventoryCountingLineUoM = {
	DocumentEntry: number | null;
	LineNumber: number | null;
	ChildNumber: number | null;
	UoMCountedQuantity: number | null;
	ItemsPerUnit: number | null;
	CountedQuantity: number | null;
	UoMCode: string | null;
	BarCode: string | null;
	CounterType: CounterTypeEnum | null;
	CounterID: number | null;
	MultipleCounterRole: MultipleCounterRoleEnum | null;
}
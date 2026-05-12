import type { ResourceAllocationEnum } from "./ResourceAllocationEnum";

export type RoutingDateCalculationInput = {
	ResourceCode: string | null;
	WarehouseCode: string | null;
	CalculateFromDate: Date | null;
	CalculateUntilDate: Date | null;
	CapacitySum: number | null;
	FirstDateProportion: number | null;
	ResourceAlloc: ResourceAllocationEnum | null;
	WORObjAbs: number | null;
	WORLine: number | null;
}
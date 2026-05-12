import type { POSTotalizer } from "./POSTotalizer";

export type POSDailySummary = {
	AbsEntry: number;
	Date: Date | null;
	EquipmentNo: string | null;
	CounterPosition: number | null;
	ResetCounterPosition: number | null;
	OperationCounter: number | null;
	Total: number | null;
	GrossSales: number | null;
	PISTotal: number | null;
	COFINSTotal: number | null;
	POSTotalizerCollection: POSTotalizer[] | null;
}
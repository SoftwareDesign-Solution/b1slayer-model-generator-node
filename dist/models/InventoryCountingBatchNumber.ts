import type { CounterTypeEnum } from "./CounterTypeEnum";
import type { MultipleCounterRoleEnum } from "./MultipleCounterRoleEnum";

export type InventoryCountingBatchNumber = {
	BatchNumber: string | null;
	ManufacturerSerialNumber: string | null;
	InternalSerialNumber: string | null;
	ExpiryDate: Date | null;
	ManufactureDate: Date | null;
	AddmisionDate: Date | null;
	Location: string | null;
	Notes: string | null;
	Quantity: number | null;
	BaseLineNumber: number | null;
	DocumentEntry: number | null;
	CounterType: CounterTypeEnum | null;
	CounterID: number | null;
	MultipleCounterRole: MultipleCounterRoleEnum | null;
	TrackingNote: number | null;
	TrackingNoteLine: number | null;
	ItemCode: string | null;
	SystemSerialNumber: number | null;
}
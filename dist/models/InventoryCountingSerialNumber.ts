import type { CounterTypeEnum } from "./CounterTypeEnum";
import type { MultipleCounterRoleEnum } from "./MultipleCounterRoleEnum";

export type InventoryCountingSerialNumber = {
	ManufacturerSerialNumber: string | null;
	InternalSerialNumber: string | null;
	ExpiryDate: Date | null;
	ManufactureDate: Date | null;
	ReceptionDate: Date | null;
	WarrantyStart: Date | null;
	WarrantyEnd: Date | null;
	Location: string | null;
	Notes: string | null;
	BatchID: string | null;
	SystemSerialNumber: number | null;
	BaseLineNumber: number | null;
	Quantity: number | null;
	DocumentEntry: number | null;
	CounterType: CounterTypeEnum | null;
	CounterID: number | null;
	MultipleCounterRole: MultipleCounterRoleEnum | null;
	TrackingNote: number | null;
	TrackingNoteLine: number | null;
	ItemCode: string | null;
}
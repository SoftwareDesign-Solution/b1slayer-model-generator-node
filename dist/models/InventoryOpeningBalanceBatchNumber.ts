export type InventoryOpeningBalanceBatchNumber = {
	DocumentEntry: number | null;
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
	TrackingNote: number | null;
	TrackingNoteLine: number | null;
	ItemCode: string | null;
	SystemSerialNumber: number | null;
}
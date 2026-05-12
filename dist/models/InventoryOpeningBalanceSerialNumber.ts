export type InventoryOpeningBalanceSerialNumber = {
	DocumentEntry: number | null;
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
	TrackingNote: number | null;
	TrackingNoteLine: number | null;
	ItemCode: string | null;
}
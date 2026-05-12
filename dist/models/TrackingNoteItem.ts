export type TrackingNoteItem = {
	TrackingNoteNumber: number | null;
	TrackingNoteLineNumber: number | null;
	ItemCCDNumber: string | null;
	ItemCode: string | null;
	Quantity: number | null;
	CountryOfOrigin: string | null;
	CustomsGroupCode: number | null;
	AccumulatedAPQuantity: number | null;
	AccumulatedARQuantity: number | null;
	AccumulatedRelocatedQuantity: number | null;
}
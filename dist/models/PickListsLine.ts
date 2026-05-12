import type { BoPickStatus } from "./BoPickStatus";
import type { SerialNumber } from "./SerialNumber";
import type { BatchNumber } from "./BatchNumber";
import type { DocumentLinesBinAllocation } from "./DocumentLinesBinAllocation";

export type PickListsLine = {
	AbsoluteEntry: number | null;
	LineNumber: number | null;
	OrderEntry: number | null;
	OrderRowID: number | null;
	PickedQuantity: number | null;
	PickStatus: BoPickStatus | null;
	ReleasedQuantity: number | null;
	PreviouslyReleasedQuantity: number | null;
	BaseObjectType: number | null;
	SerialNumbers: SerialNumber[] | null;
	BatchNumbers: BatchNumber[] | null;
	DocumentLinesBinAllocations: DocumentLinesBinAllocation[] | null;
}
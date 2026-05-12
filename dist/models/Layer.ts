import type { TransTypesEnum } from "./TransTypesEnum";

export type Layer = {
	TransactionSequenceNum: number | null;
	LayerID: number | null;
	DocNumber: string | null;
	DocType: TransTypesEnum | null;
	EntryDate: Date | null;
	CurrentCost: number | null;
	OpenQty: number | null;
}
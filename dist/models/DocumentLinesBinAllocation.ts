import type { BoYesNoEnum } from "./BoYesNoEnum";

export type DocumentLinesBinAllocation = {
	BinAbsEntry: number | null;
	Quantity: number | null;
	AllowNegativeQuantity: BoYesNoEnum | null;
	SerialAndBatchNumbersBaseLine: number | null;
	BaseLineNumber: number | null;
}
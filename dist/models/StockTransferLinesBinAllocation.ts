import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { BinActionTypeEnum } from "./BinActionTypeEnum";

export type StockTransferLinesBinAllocation = {
	BinAbsEntry: number | null;
	Quantity: number | null;
	AllowNegativeQuantity: BoYesNoEnum | null;
	SerialAndBatchNumbersBaseLine: number | null;
	BinActionType: BinActionTypeEnum | null;
	BaseLineNumber: number | null;
}
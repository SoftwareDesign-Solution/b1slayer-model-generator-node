import type { BoSvcExpPartTypes } from "./BoSvcExpPartTypes";
import type { BoSvcEpxDocTypes } from "./BoSvcEpxDocTypes";
import type { BoStckTrnDir } from "./BoStckTrnDir";

export type ServiceCallInventoryExpense = {
	LineNum: number | null;
	PartType: BoSvcExpPartTypes | null;
	DocumentType: BoSvcEpxDocTypes | null;
	DocumentPostingDate: Date | null;
	DocumentNumber: number | null;
	StockTransferDirection: BoStckTrnDir | null;
	DocEntry: number | null;
}
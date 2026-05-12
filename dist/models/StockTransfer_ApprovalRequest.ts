import type { BoYesNoEnum } from "./BoYesNoEnum";

export type StockTransfer_ApprovalRequest = {
	ApprovalTemplatesID: number | null;
	Remarks: string | null;
	ApprovalTemplatesName: string | null;
	ActiveForUpdate: BoYesNoEnum | null;
}
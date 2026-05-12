import type { BoYesNoEnum } from "./BoYesNoEnum";

export type Payments_ApprovalRequest = {
	ApprovalTemplatesID: number | null;
	Remarks: string | null;
	ApprovalTemplatesName: string | null;
	ActiveForUpdate: BoYesNoEnum | null;
}
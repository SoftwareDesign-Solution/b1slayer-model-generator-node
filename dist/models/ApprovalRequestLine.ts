import type { BoApprovalRequestDecisionEnum } from "./BoApprovalRequestDecisionEnum";

export type ApprovalRequestLine = {
	StageCode: number | null;
	UserID: number | null;
	Status: BoApprovalRequestDecisionEnum | null;
	Remarks: string | null;
	UpdateDate: Date | null;
	UpdateTime: TimeOfDay | null;
	CreationDate: Date | null;
	CreationTime: TimeOfDay | null;
}
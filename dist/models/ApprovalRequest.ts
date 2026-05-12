import type { BoApprovalRequestStatusEnum } from "./BoApprovalRequestStatusEnum";
import type { ApprovalRequestLine } from "./ApprovalRequestLine";
import type { ApprovalRequestDecision } from "./ApprovalRequestDecision";

export type ApprovalRequest = {
	Code: number;
	ApprovalTemplatesID: number | null;
	ObjectType: string | null;
	IsDraft: string | null;
	ObjectEntry: number | null;
	Status: BoApprovalRequestStatusEnum | null;
	Remarks: string | null;
	CurrentStage: number | null;
	OriginatorID: number | null;
	CreationDate: Date | null;
	CreationTime: TimeOfDay | null;
	DraftEntry: number | null;
	DraftType: string | null;
	ApprovalRequestLines: ApprovalRequestLine[] | null;
	ApprovalRequestDecisions: ApprovalRequestDecision[] | null;
}
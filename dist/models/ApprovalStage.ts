import type { ApprovalStageApprover } from "./ApprovalStageApprover";

export type ApprovalStage = {
	Code: number;
	Name: string | null;
	NoOfApproversRequired: number | null;
	Remarks: string | null;
	ApprovalStageApprovers: ApprovalStageApprover[] | null;
}
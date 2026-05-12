import type { BoApprovalRequestDecisionEnum } from "./BoApprovalRequestDecisionEnum";

export type ApprovalRequestDecision = {
	ApproverUserName: string | null;
	ApproverPassword: string | null;
	Status: BoApprovalRequestDecisionEnum | null;
	Remarks: string | null;
}
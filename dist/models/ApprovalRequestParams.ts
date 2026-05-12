import type { BoApprovalRequestStatusEnum } from "./BoApprovalRequestStatusEnum";

export type ApprovalRequestParams = {
	Code: number | null;
	Remarks: string | null;
	Status: BoApprovalRequestStatusEnum | null;
}
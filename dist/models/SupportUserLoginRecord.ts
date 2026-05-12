import type { SupportUserLoginRecordLogReasonTypeEnum } from "./SupportUserLoginRecordLogReasonTypeEnum";

export type SupportUserLoginRecord = {
	ID: number | null;
	RealName: string | null;
	LogReason: SupportUserLoginRecordLogReasonTypeEnum | null;
	LogDetail: string | null;
}
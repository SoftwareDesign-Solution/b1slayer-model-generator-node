import type { UserActionTypeEnum } from "./UserActionTypeEnum";
import type { UserAccessLogReasonIDTypeEnum } from "./UserAccessLogReasonIDTypeEnum";

export type UserAccessLog = {
	UserCode: string | null;
	Action: UserActionTypeEnum | null;
	ActionBy: string | null;
	ClientIP: string | null;
	ClientName: string | null;
	ActionDate: Date | null;
	ActionTime: TimeOfDay | null;
	WinUsrName: string | null;
	WinSessnID: number | null;
	ProcName: string | null;
	ProcessID: number | null;
	SessionID: number | null;
	ReasonID: UserAccessLogReasonIDTypeEnum | null;
	ReasonDesc: string | null;
	Source: string | null;
	UserID: number | null;
}
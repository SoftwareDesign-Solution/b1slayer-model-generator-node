import type { UserActionTypeEnum } from "./UserActionTypeEnum";

export type UserActionRecordItem = {
	UserCode: string | null;
	Action: UserActionTypeEnum | null;
	ActionBy: string | null;
	ClientIP: string | null;
	ClientName: string | null;
	ActionDate: Date | null;
	ActionTime: TimeOfDay | null;
	WindowsSession: number | null;
	WindowsUser: string | null;
	ProcessName: string | null;
	ProcessID: number | null;
	AliveDuration: number | null;
}
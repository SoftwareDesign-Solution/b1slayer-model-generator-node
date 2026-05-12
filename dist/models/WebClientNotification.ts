export type WebClientNotification = {
	Guid: string;
	UserId: number | null;
	ActivityDate: Date | null;
	ReadStatus: string | null;
	IsDismissed: string | null;
	NotiType: number | null;
}
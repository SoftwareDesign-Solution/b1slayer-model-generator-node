import type { TimeSheetTypeEnum } from "./TimeSheetTypeEnum";
import type { PM_TimeSheetLineData } from "./PM_TimeSheetLineData";

export type PM_TimeSheetData = {
	AbsEntry: number;
	DocNumber: number | null;
	TimeSheetType: TimeSheetTypeEnum | null;
	UserID: number | null;
	LastName: string | null;
	FirstName: string | null;
	Department: number | null;
	OwnerCode: number | null;
	DateFrom: Date | null;
	DateTo: Date | null;
	SAPPassport: string | null;
	AttachmentEntry: number | null;
	UserCode: string | null;
	PM_TimeSheetLineDataCollection: PM_TimeSheetLineData[] | null;
}
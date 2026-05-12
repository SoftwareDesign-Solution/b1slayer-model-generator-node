import type { BoYesNoEnum } from "./BoYesNoEnum";

export type PM_TimeSheetLineData = {
	LineID: number | null;
	Date: Date | null;
	ActivityType: number | null;
	LaborItem: string | null;
	StartTime: TimeOfDay | null;
	EndTime: TimeOfDay | null;
	Workorder: number | null;
	ServiceCall: number | null;
	CostCenter: string | null;
	FinancialProject: string | null;
	Location: number | null;
	GPSData: string | null;
	Branch: number | null;
	Break: TimeOfDay | null;
	NonBillableTime: TimeOfDay | null;
	EffectiveTime: TimeOfDay | null;
	BillableTime: TimeOfDay | null;
	FullDay: BoYesNoEnum | null;
	ProjectID: number | null;
	SubprojectID: number | null;
	StageID: number | null;
}
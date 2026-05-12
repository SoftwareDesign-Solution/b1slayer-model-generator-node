import type { BoYesNoEnum } from "./BoYesNoEnum";

export type PMS_OpenIssueData = {
	LineID: number | null;
	StageID: number | null;
	Area: number | null;
	Priority: number | null;
	Remarks: string | null;
	Closed: BoYesNoEnum | null;
	SolutionID: number | null;
	Responsible: number | null;
	EnteredBy: number | null;
	EnteredDate: Date | null;
	Effort: number | null;
}
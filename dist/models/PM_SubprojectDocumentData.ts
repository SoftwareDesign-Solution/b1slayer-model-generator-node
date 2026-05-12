import type { SubprojectStatusTypeEnum } from "./SubprojectStatusTypeEnum";
import type { PMS_StageData } from "./PMS_StageData";
import type { PMS_OpenIssueData } from "./PMS_OpenIssueData";
import type { PMS_DocumentData } from "./PMS_DocumentData";
import type { PMS_ActivityData } from "./PMS_ActivityData";
import type { PMS_WorkOrderData } from "./PMS_WorkOrderData";
import type { PMS_SummaryData } from "./PMS_SummaryData";
import type { PMS_DocAttachement } from "./PMS_DocAttachement";
import type { PMS_StageAttachement } from "./PMS_StageAttachement";

export type PM_SubprojectDocumentData = {
	AbsEntry: number | null;
	Owner: number | null;
	SubprojectName: string | null;
	StartDate: Date | null;
	FinishedPercent: number | null;
	ParentID: number | null;
	ProjectID: number | null;
	Order: number | null;
	SubprojectType: number | null;
	SubprojectContribution: number | null;
	SubprojectStatus: SubprojectStatusTypeEnum | null;
	SubprojectEndDate: Date | null;
	ActualCost: number | null;
	PlannedCost: number | null;
	SubprojectDepth: number | null;
	DueDate: Date | null;
	PMS_StagesCollection: PMS_StageData[] | null;
	PMS_OpenIssuesCollection: PMS_OpenIssueData[] | null;
	PMS_DocumentsCollection: PMS_DocumentData[] | null;
	PMS_ActivitiesCollection: PMS_ActivityData[] | null;
	PMS_WorkOrdersCollection: PMS_WorkOrderData[] | null;
	PMS_SummaryData: PMS_SummaryData | null;
	PMS_DocAttachements: PMS_DocAttachement[] | null;
	PMS_StageAttachements: PMS_StageAttachement[] | null;
}
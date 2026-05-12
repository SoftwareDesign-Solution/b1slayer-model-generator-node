import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { StageDepTypeEnum } from "./StageDepTypeEnum";

export type PM_StageData = {
	LineID: number | null;
	StageID: number | null;
	StageType: number | null;
	StartDate: Date | null;
	CloseDate: Date | null;
	Task: number | null;
	Description: string | null;
	ExpectedCosts: number | null;
	InvoicedAmountSales: number | null;
	OpenAmountSales: number | null;
	InvoicedAmountPurchase: number | null;
	OpenAmountPurchase: number | null;
	PercentualCompletness: number | null;
	IsFinished: BoYesNoEnum | null;
	StageOwner: number | null;
	DependsOnStage1: number | null;
	DependsOnStage2: number | null;
	DependsOnStage3: number | null;
	DependsOnStage4: number | null;
	StageDependency1Type: StageDepTypeEnum | null;
	StageDependency2Type: StageDepTypeEnum | null;
	StageDependency3Type: StageDepTypeEnum | null;
	StageDependency4Type: StageDepTypeEnum | null;
	DependsOnStageID1: number | null;
	DependsOnStageID2: number | null;
	DependsOnStageID3: number | null;
	DependsOnStageID4: number | null;
	AttachmentEntry: number | null;
	UniqueID: string | null;
	FinishedDate: Date | null;
}
export type ProductionOrdersStage = {
	DocEntry: number | null;
	StageID: number | null;
	SequenceNumber: number | null;
	StageEntry: number | null;
	Name: string | null;
	StartDate: Date | null;
	EndDate: Date | null;
	RequiredDays: number | null;
	WaitingDays: number | null;
	CalculationProportion: number | null;
}
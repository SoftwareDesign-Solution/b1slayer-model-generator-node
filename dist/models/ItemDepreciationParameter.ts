export type ItemDepreciationParameter = {
	FiscalYear: string | null;
	DepreciationArea: string | null;
	DepreciationStartDate: Date | null;
	DepreciationEndDate: Date | null;
	UsefulLife: number | null;
	RemainingLife: number | null;
	DepreciationType: string | null;
	TotalUnitsInUsefulLife: number | null;
	RemainingUnits: number | null;
	StandardUnits: number | null;
}
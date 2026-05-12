export type AssetRevaluationLine = {
	DocEntry: number | null;
	LineNumber: number | null;
	AssetNumber: string | null;
	CurrentNBV: number | null;
	NewNBV: number | null;
	Remarks: string | null;
	RevaluationPercent: number | null;
	DistributionRule: string | null;
	DistributionRule2: string | null;
	DistributionRule3: string | null;
	DistributionRule4: string | null;
	DistributionRule5: string | null;
	Project: string | null;
}
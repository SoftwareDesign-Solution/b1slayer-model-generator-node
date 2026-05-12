import type { BoYesNoEnum } from "./BoYesNoEnum";

export type AssetDocumentLine = {
	DocEntry: number | null;
	LineNumber: number | null;
	AssetNumber: string | null;
	GLAccount: string | null;
	Quantity: number | null;
	TotalLC: number | null;
	TotalFC: number | null;
	TotalSC: number | null;
	DepreciationArea: string | null;
	Remarks: string | null;
	NewAssetNumber: string | null;
	Partial: BoYesNoEnum | null;
	APC: number | null;
	NewAssetClass: string | null;
	DistributionRule: string | null;
	DistributionRule2: string | null;
	DistributionRule3: string | null;
	DistributionRule4: string | null;
	DistributionRule5: string | null;
	Project: string | null;
}
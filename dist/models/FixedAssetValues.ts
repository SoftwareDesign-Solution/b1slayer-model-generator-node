import type { AssetTransactionTypeEnum } from "./AssetTransactionTypeEnum";

export type FixedAssetValues = {
	TransactionType: AssetTransactionTypeEnum | null;
	AcquisitionCost: number | null;
	Quantity: number | null;
	DepreciationValue: number | null;
	NetBookValue: number | null;
	OrdinaryDepreciationValue: number | null;
	UnplanedDepreciationValue: number | null;
	SpecialDepreciationValue: number | null;
	WriteUp: number | null;
	Appreciation: number | null;
}
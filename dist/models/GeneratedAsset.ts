import type { GeneratedAssetStatusEnum } from "./GeneratedAssetStatusEnum";

export type GeneratedAsset = {
	DocEntry: number | null;
	LineNumber: number | null;
	VisualOrder: number | null;
	AssetCode: string | null;
	Status: GeneratedAssetStatusEnum | null;
	Remarks: string | null;
	SerialNumber: string | null;
	amount: number | null;
	amountSC: number | null;
}
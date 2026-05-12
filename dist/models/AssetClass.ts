import type { AssetTypeEnum } from "./AssetTypeEnum";
import type { AssetClassLine } from "./AssetClassLine";

export type AssetClass = {
	Code: string;
	Description: string | null;
	AssetType: AssetTypeEnum | null;
	ValueLimitFrom: number | null;
	ValueLimitTo: number | null;
	BPLID: number | null;
	AttributeGroup: number | null;
	AssetClassCollection: AssetClassLine[] | null;
}
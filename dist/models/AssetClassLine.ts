import type { BoYesNoEnum } from "./BoYesNoEnum";

export type AssetClassLine = {
	Code: string | null;
	LineNumber: number | null;
	DepreciationAreaID: string | null;
	ActiveStatus: BoYesNoEnum | null;
	AccountDetermination: string | null;
	DepreciationTypeID: string | null;
	UseLife: number | null;
}
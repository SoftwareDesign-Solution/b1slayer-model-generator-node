import type { BrazilMultiIndexerTypes } from "./BrazilMultiIndexerTypes";

export type BrazilMultiIndexer = {
	ID: number;
	IndexerType: BrazilMultiIndexerTypes | null;
	Code: string | null;
	Description: string | null;
	FirstRefIndexerCode: string | null;
	SecondRefIndexerCode: string | null;
	ThirdRefIndexerCode: string | null;
}
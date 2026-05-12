import type { BrazilStringIndexerTypes } from "./BrazilStringIndexerTypes";

export type BrazilStringIndexer = {
	IndexerType: BrazilStringIndexerTypes | null;
	Code: string | null;
	Description: string | null;
	ID: number;
}
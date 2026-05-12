import type { BrazilNumericIndexerTypes } from "./BrazilNumericIndexerTypes";

export type BrazilNumericIndexer = {
	IndexerType: BrazilNumericIndexerTypes | null;
	Code: number | null;
	Description: string | null;
	ID: number;
}
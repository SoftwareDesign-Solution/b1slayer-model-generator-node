import type { ExtendedTranslation_ResultLine } from "./ExtendedTranslation_ResultLine";

export type ExtendedTranslation_ItemLine = {
	DocEntry: number | null;
	LineNumber: number | null;
	ItemCode: string | null;
	ItemType: string | null;
	SlimType: string | null;
	MaxLength: number | null;
	SourceText: string | null;
	Memo: string | null;
	ExtendedTranslation_ResultLines: ExtendedTranslation_ResultLine[] | null;
}
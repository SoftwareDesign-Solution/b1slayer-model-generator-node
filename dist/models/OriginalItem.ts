import type { AlternativeItem } from "./AlternativeItem";

export type OriginalItem = {
	ItemCode: string | null;
	ItemName: string | null;
	AlternativeItems: AlternativeItem[] | null;
}
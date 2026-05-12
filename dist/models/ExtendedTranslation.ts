import type { TranslationCategoryEnum } from "./TranslationCategoryEnum";
import type { ExtendedTranslation_ItemLine } from "./ExtendedTranslation_ItemLine";

export type ExtendedTranslation = {
	DocEntry: number;
	Category: TranslationCategoryEnum | null;
	ID: string | null;
	SecondaryID: string | null;
	SourceLanguage: number | null;
	UpdateDate: Date | null;
	CreateDate: Date | null;
	ExtendedTranslation_ItemLines: ExtendedTranslation_ItemLine[] | null;
}
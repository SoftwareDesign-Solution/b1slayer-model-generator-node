import type { TranslationCategoryEnum } from "./TranslationCategoryEnum";

export type ExtendedTranslationParams = {
	DocEntry: number | null;
	Category: TranslationCategoryEnum | null;
	ID: string | null;
	SecondaryID: string | null;
}
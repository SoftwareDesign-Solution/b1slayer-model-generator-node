import type { TranslationsInUserLanguage } from "./TranslationsInUserLanguage";

export type MultiLanguageTranslation = {
	Numerator: number;
	TableName: string | null;
	FieldAlias: string | null;
	PrimaryKeyofobject: string | null;
	TranslationsInUserLanguages: TranslationsInUserLanguage[] | null;
}
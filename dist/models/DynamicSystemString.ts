import type { BoYesNoEnum } from "./BoYesNoEnum";

export type DynamicSystemString = {
	FormID: string;
	ItemID: string;
	ColumnID: string;
	ItemString: string | null;
	IsBold: BoYesNoEnum | null;
	IsItalics: BoYesNoEnum | null;
}
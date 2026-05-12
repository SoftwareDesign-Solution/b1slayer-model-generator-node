import type { BoYesNoEnum } from "./BoYesNoEnum";

export type UserObjectMD_EnhancedFormColumn = {
	Code: string | null;
	ColumnNumber: number | null;
	ChildNumber: number | null;
	ColumnAlias: string | null;
	ColumnDescription: string | null;
	ColumnIsUsed: BoYesNoEnum | null;
	Editable: BoYesNoEnum | null;
}
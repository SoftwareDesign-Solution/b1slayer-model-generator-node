import type { BoYesNoEnum } from "./BoYesNoEnum";

export type ColumnPreferences = {
	User: number;
	FormID: string;
	ItemNumber: string;
	Column: string;
	Width: number | null;
	VisibleInForm: BoYesNoEnum | null;
	TabsLayout: number | null;
	EditableInForm: BoYesNoEnum | null;
	VisibleInExpanded: BoYesNoEnum | null;
	ExpandedIndex: number | null;
	EditableInExpanded: BoYesNoEnum | null;
}
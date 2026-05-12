import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { SortOrderEnum } from "./SortOrderEnum";

export type ChooseFromList_Line = {
	ObjectName: string | null;
	FieldIndex: number | null;
	FieldNo: string | null;
	DisplayedName: string | null;
	GroupBy: BoYesNoEnum | null;
	Visible: BoYesNoEnum | null;
	ShowType: BoYesNoEnum | null;
	SortOrder: SortOrderEnum | null;
	VisualIndex: number | null;
}
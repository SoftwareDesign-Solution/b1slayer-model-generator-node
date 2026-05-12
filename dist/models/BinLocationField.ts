import type { BinLocationFieldTypeEnum } from "./BinLocationFieldTypeEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type BinLocationField = {
	AbsEntry: number;
	FieldType: BinLocationFieldTypeEnum | null;
	FieldNumber: number | null;
	Name: string | null;
	Activated: BoYesNoEnum | null;
	DefaultFieldName: string | null;
}
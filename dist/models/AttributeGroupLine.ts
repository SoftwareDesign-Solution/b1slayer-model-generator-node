import type { AttributeGroupFieldTypeEnum } from "./AttributeGroupFieldTypeEnum";

export type AttributeGroupLine = {
	Code: number | null;
	SortNumber: number | null;
	AttributeID: number | null;
	AttributeName: string | null;
	FieldType: AttributeGroupFieldTypeEnum | null;
	DefaultValue: string | null;
}
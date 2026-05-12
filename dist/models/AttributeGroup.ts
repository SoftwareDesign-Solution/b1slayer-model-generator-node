import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { AttributeGroupLine } from "./AttributeGroupLine";

export type AttributeGroup = {
	Code: number;
	Name: string | null;
	Locked: BoYesNoEnum | null;
	AttributeGroupCollection: AttributeGroupLine[] | null;
}
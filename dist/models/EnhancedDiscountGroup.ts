import type { DiscountGroupTypeEnum } from "./DiscountGroupTypeEnum";
import type { DiscountGroupRelationsEnum } from "./DiscountGroupRelationsEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { DiscountGroupLine } from "./DiscountGroupLine";

export type EnhancedDiscountGroup = {
	AbsEntry: number;
	Type: DiscountGroupTypeEnum | null;
	ObjectCode: string | null;
	DiscountRelations: DiscountGroupRelationsEnum | null;
	Active: BoYesNoEnum | null;
	ValidFrom: Date | null;
	ValidTo: Date | null;
	DiscountGroupLineCollection: DiscountGroupLine[] | null;
}
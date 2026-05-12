import type { DiscountGroupBaseObjectEnum } from "./DiscountGroupBaseObjectEnum";
import type { DiscountGroupDiscountTypeEnum } from "./DiscountGroupDiscountTypeEnum";

export type DiscountGroupLine = {
	AbsEntry: number | null;
	ObjectType: DiscountGroupBaseObjectEnum | null;
	ObjectCode: string | null;
	DiscountType: DiscountGroupDiscountTypeEnum | null;
	Discount: number | null;
	PaidQuantity: number | null;
	FreeQuantity: number | null;
	MaximumFreeQuantity: number | null;
}
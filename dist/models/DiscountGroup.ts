import type { DiscountGroupBaseObjectEnum } from "./DiscountGroupBaseObjectEnum";

export type DiscountGroup = {
	ObjectEntry: string | null;
	DiscountPercentage: number | null;
	BPCode: string | null;
	BaseObjectType: DiscountGroupBaseObjectEnum | null;
}
import type { AccountSegmentationTypeEnum } from "./AccountSegmentationTypeEnum";
import type { AccountSegmentationsCategory } from "./AccountSegmentationsCategory";

export type AccountSegmentation = {
	Numerator: number;
	Name: string | null;
	Size: number | null;
	Type: AccountSegmentationTypeEnum | null;
	AccountSegmentationsCategories: AccountSegmentationsCategory[] | null;
}
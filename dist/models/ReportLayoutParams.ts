import type { ReportLayoutCategoryEnum } from "./ReportLayoutCategoryEnum";

export type ReportLayoutParams = {
	LayoutCode: string | null;
	LayoutName: string | null;
	Category: ReportLayoutCategoryEnum | null;
}
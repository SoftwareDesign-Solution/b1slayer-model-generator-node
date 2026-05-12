import type { TaxReportFilterType } from "./TaxReportFilterType";

export type TaxReportFilterParams = {
	Code: number | null;
	Name: string | null;
	FilterType: TaxReportFilterType | null;
}
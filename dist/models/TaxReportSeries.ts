import type { TaxReportFilterDocumentType } from "./TaxReportFilterDocumentType";

export type TaxReportSeries = {
	DocumentType: TaxReportFilterDocumentType | null;
	SeriesCode: number | null;
}
import type { TaxReportFilterDocumentType } from "./TaxReportFilterDocumentType";

export type TaxReportDocument = {
	DocumentType: TaxReportFilterDocumentType | null;
	FromNumber: number | null;
	ToNumber: number | null;
}
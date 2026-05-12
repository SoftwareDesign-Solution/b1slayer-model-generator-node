import type { TaxInvoiceReportLineTypeEnum } from "./TaxInvoiceReportLineTypeEnum";

export type TaxInvoiceReportLine = {
	DocumentType: number | null;
	DocumentEntry: number | null;
	LineType: TaxInvoiceReportLineTypeEnum | null;
	BaseAmount: number | null;
	TaxAmount: number | null;
	ItemQuantity: number | null;
	ItemNo: string | null;
	ItemDescription: string | null;
	TaxCode: string | null;
	DocumentDate: Date | null;
	ItemPrice: number | null;
	LineNumber: number | null;
	Currency: string | null;
	BusinessPlace: number | null;
	TaxInvoiceReportNumber: string | null;
	BPCode: string | null;
	BPName: string | null;
	Legacy: string | null;
}
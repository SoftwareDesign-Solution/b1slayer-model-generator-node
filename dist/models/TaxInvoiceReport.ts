import type { TaxInvoiceReportNTSApprovedEnum } from "./TaxInvoiceReportNTSApprovedEnum";
import type { TaxInvoiceReportLine } from "./TaxInvoiceReportLine";

export type TaxInvoiceReport = {
	NTSApproval: TaxInvoiceReportNTSApprovedEnum | null;
	ETaxWebSite: number | null;
	ETaxNo: string | null;
	NTSApprovalNo: string | null;
	OriginalNTSApprovalNo: string | null;
	Remarks: string | null;
	TaxInvoiceReportNumber: string;
	Date: Date | null;
	BusinessPlace: number | null;
	BPCode: string | null;
	BPName: string | null;
	BaseAmount: number | null;
	TaxAmount: number | null;
	Canceled: string | null;
	ReportType: number | null;
	TaxInvoiceReportLineCollection: TaxInvoiceReportLine[] | null;
}
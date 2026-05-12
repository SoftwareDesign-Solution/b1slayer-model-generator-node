import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { EBooksLine } from "./EBooksLine";

export type EBooks = {
	AbsEntry: number;
	MARK: string | null;
	CancelMARK: string | null;
	UID: string | null;
	IssuerVATID: string | null;
	CPVATID: string | null;
	Series: string | null;
	AA: string | null;
	IssueDate: Date | null;
	InvoiceType: string | null;
	Currency: string | null;
	TotalNetValue: number | null;
	TotalVatAmount: number | null;
	TotalWithheldAmount: number | null;
	TotalGrossValue: number | null;
	LinkedDocType: number | null;
	LinkedDocEntry: number | null;
	IsNegativeMark: BoYesNoEnum | null;
	EBooksLines: EBooksLine[] | null;
}
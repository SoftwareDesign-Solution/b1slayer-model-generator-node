import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { BoBpsDocTypes } from "./BoBpsDocTypes";

export type BankPage = {
	AccountCode: string;
	Sequence: number;
	AccountName: string | null;
	Reference: string | null;
	DueDate: Date | null;
	Memo: string | null;
	DebitAmount: number | null;
	CreditAmount: number | null;
	BankMatch: number | null;
	DataSource: string | null;
	UserSignature: number | null;
	ExternalCode: string | null;
	CardCode: string | null;
	CardName: string | null;
	StatementNumber: number | null;
	InvoiceNumber: string | null;
	PaymentCreated: BoYesNoEnum | null;
	VisualOrder: number | null;
	DocNumberType: BoBpsDocTypes | null;
	PaymentReference: string | null;
	InvoiceNumberEx: string | null;
	BICSwiftCode: string | null;
}
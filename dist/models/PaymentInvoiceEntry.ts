import type { PaymentInvoiceTypeEnum } from "./PaymentInvoiceTypeEnum";

export type PaymentInvoiceEntry = {
	DocType: PaymentInvoiceTypeEnum | null;
	DocEntry: number | null;
	InstallmentId: number | null;
}
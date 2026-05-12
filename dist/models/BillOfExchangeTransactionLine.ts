import type { BoBOETypes } from "./BoBOETypes";

export type BillOfExchangeTransactionLine = {
	BillOfExchangeNo: number | null;
	BillOfExchangeType: BoBOETypes | null;
	BillOfExchangeDueDate: Date | null;
}
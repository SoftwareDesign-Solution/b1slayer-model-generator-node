import type { BoBOTFromStatus } from "./BoBOTFromStatus";
import type { BoBOTToStatus } from "./BoBOTToStatus";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { BillOfExchangeTransactionLine } from "./BillOfExchangeTransactionLine";
import type { BillOfExchangeTransDeposit } from "./BillOfExchangeTransDeposit";
import type { BillOfExchangeTransBankPage } from "./BillOfExchangeTransBankPage";

export type BillOfExchangeTransaction = {
	StatusFrom: BoBOTFromStatus | null;
	StatusTo: BoBOTToStatus | null;
	TransactionDate: Date | null;
	TransactionTime: TimeOfDay | null;
	IsBoeReconciled: BoYesNoEnum | null;
	TransactionNumber: number | null;
	PostingDate: Date | null;
	TaxDate: Date | null;
	BOETransactionkey: number;
	BillOfExchangeTransactionLines: BillOfExchangeTransactionLine[] | null;
	BillOfExchangeTransDeposits: BillOfExchangeTransDeposit[] | null;
	BillOfExchangeTransBankPages: BillOfExchangeTransBankPage[] | null;
}
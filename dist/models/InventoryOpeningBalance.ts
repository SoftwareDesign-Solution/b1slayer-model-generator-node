import type { InventoryOpeningBalancePriceSourceEnum } from "./InventoryOpeningBalancePriceSourceEnum";
import type { InventoryOpeningBalanceLine } from "./InventoryOpeningBalanceLine";

export type InventoryOpeningBalance = {
	DocumentEntry: number;
	PostingDate: Date | null;
	DocumentDate: Date | null;
	DocumentNumber: number | null;
	Series: number | null;
	Reference2: string | null;
	Remarks: string | null;
	BranchID: number | null;
	PriceSource: InventoryOpeningBalancePriceSourceEnum | null;
	PriceList: number | null;
	JournalRemark: string | null;
	DocObjectCodeEx: string | null;
	PeriodIndicator: string | null;
	FinancialPeriod: number | null;
	AttachmentEntry: number | null;
	U_CKSDMSID: number | null;
	U_CKSDMSFILEID: number | null;
	U_CKSDMSPRINTGUID: string | null;
	U_CKS_BarcodeID: string | null;
	InventoryOpeningBalanceLines: InventoryOpeningBalanceLine[] | null;
}
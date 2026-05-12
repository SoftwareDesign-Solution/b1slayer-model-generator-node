import type { InventoryPostingPriceSourceEnum } from "./InventoryPostingPriceSourceEnum";
import type { InventoryPostingLine } from "./InventoryPostingLine";
import type { InventoryPostingDocumentReferences } from "./InventoryPostingDocumentReferences";

export type InventoryPosting = {
	DocumentEntry: number;
	DocumentNumber: number | null;
	Series: number | null;
	PostingDate: Date | null;
	CountDate: Date | null;
	CountTime: TimeOfDay | null;
	Remarks: string | null;
	Reference2: string | null;
	BranchID: number | null;
	PriceSource: InventoryPostingPriceSourceEnum | null;
	PriceList: number | null;
	JournalRemark: string | null;
	DocObjectCodeEx: string | null;
	FinancialPeriod: number | null;
	PeriodIndicator: string | null;
	AttachmentEntry: number | null;
	YearEndDate: Date | null;
	U_CKSDMSID: number | null;
	U_CKSDMSFILEID: number | null;
	U_CKSDMSPRINTGUID: string | null;
	U_CKS_BarcodeID: string | null;
	InventoryPostingLines: InventoryPostingLine[] | null;
	InventoryPostingDocumentReferencesCollection: InventoryPostingDocumentReferences[] | null;
}
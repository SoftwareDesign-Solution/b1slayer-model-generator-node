import type { CounterTypeEnum } from "./CounterTypeEnum";
import type { CountingDocumentStatusEnum } from "./CountingDocumentStatusEnum";
import type { CountingTypeEnum } from "./CountingTypeEnum";
import type { TeamCounter } from "./TeamCounter";
import type { IndividualCounter } from "./IndividualCounter";
import type { InventoryCountingLine } from "./InventoryCountingLine";
import type { InventoryCountingDocumentReferences } from "./InventoryCountingDocumentReferences";

export type InventoryCounting = {
	DocumentEntry: number;
	DocumentNumber: number | null;
	Series: number | null;
	CountDate: Date | null;
	CountTime: TimeOfDay | null;
	SingleCounterType: CounterTypeEnum | null;
	SingleCounterID: number | null;
	DocumentStatus: CountingDocumentStatusEnum | null;
	Remarks: string | null;
	Reference2: string | null;
	BranchID: number | null;
	DocObjectCodeEx: string | null;
	FinancialPeriod: number | null;
	PeriodIndicator: string | null;
	CountingType: CountingTypeEnum | null;
	AttachmentEntry: number | null;
	YearEndDate: Date | null;
	U_CKSDMSID: number | null;
	U_CKSDMSFILEID: number | null;
	U_CKSDMSPRINTGUID: string | null;
	U_CKS_BarcodeID: string | null;
	TeamCounters: TeamCounter[] | null;
	IndividualCounters: IndividualCounter[] | null;
	InventoryCountingLines: InventoryCountingLine[] | null;
	InventoryCountingDocumentReferencesCollection: InventoryCountingDocumentReferences[] | null;
}
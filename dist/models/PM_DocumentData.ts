import type { PMDocumentTypeEnum } from "./PMDocumentTypeEnum";
import type { LineStatusTypeEnum } from "./LineStatusTypeEnum";
import type { AmountCatTypeEnum } from "./AmountCatTypeEnum";
import type { PMCategorizeTypeEnum } from "./PMCategorizeTypeEnum";
import type { PMOperationTypeEnum } from "./PMOperationTypeEnum";

export type PM_DocumentData = {
	LineID: number | null;
	StageID: number | null;
	DocType: PMDocumentTypeEnum | null;
	DocEntry: number | null;
	DocDate: Date | null;
	Total: number | null;
	LineNumber: number | null;
	Status: LineStatusTypeEnum | null;
	AmountCategory: AmountCatTypeEnum | null;
	Categorize: PMCategorizeTypeEnum | null;
	Operation: PMOperationTypeEnum | null;
}
import type { ReferencedObjectTypeEnum } from "./ReferencedObjectTypeEnum";

export type ProductionOrdersDocumentReference = {
	DocEntry: number | null;
	LineNumber: number | null;
	RefDocEntr: number | null;
	RefDocNum: number | null;
	ExtDocNum: string | null;
	RefObjType: ReferencedObjectTypeEnum | null;
	IssueDate: Date | null;
	Remark: string | null;
}
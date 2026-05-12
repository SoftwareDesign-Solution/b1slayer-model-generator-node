import type { ReferencedObjectTypeEnum } from "./ReferencedObjectTypeEnum";

export type MaterialRevaluationDocumentReferences = {
	DocEntry: number | null;
	LineNumber: number | null;
	ReferencedDocEntry: number | null;
	ReferencedDocNumber: number | null;
	ExternalReferencedDocNumber: string | null;
	ReferencedObjectType: ReferencedObjectTypeEnum | null;
	IssueDate: Date | null;
	Remark: string | null;
}
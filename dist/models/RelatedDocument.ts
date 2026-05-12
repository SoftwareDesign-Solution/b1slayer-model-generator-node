import type { RelatedDocumentTypeEnum } from "./RelatedDocumentTypeEnum";

export type RelatedDocument = {
	DocType: RelatedDocumentTypeEnum | null;
	AbsEntry: number | null;
	UUID: string | null;
}
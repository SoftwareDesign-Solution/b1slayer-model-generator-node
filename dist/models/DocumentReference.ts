import type { ReferencedObjectTypeEnum } from "./ReferencedObjectTypeEnum";
import type { LinkReferenceTypeEnum } from "./LinkReferenceTypeEnum";

export type DocumentReference = {
	DocEntry: number | null;
	LineNumber: number | null;
	RefDocEntr: number | null;
	RefDocNum: number | null;
	ExtDocNum: string | null;
	RefObjType: ReferencedObjectTypeEnum | null;
	AccessKey: string | null;
	IssueDate: Date | null;
	IssuerCNPJ: string | null;
	IssuerCode: string | null;
	Model: string | null;
	Series: string | null;
	Number: number | null;
	RefAccKey: string | null;
	RefAmount: number | null;
	SubSeries: string | null;
	Remark: string | null;
	LinkRefTyp: LinkReferenceTypeEnum | null;
}
import type { DocumentObjectTypeEnum } from "./DocumentObjectTypeEnum";

export type TransportationDocumentLineData = {
	TranspDocNumber: number | null;
	LineID: number | null;
	DocType: DocumentObjectTypeEnum | null;
	DocNumber: number | null;
	DocLineNumber: number | null;
	ItemCode: string | null;
	TransportedQuantity: number | null;
	DocOrderNum: number | null;
}
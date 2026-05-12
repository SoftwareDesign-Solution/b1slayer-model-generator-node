import type { BlanketAgreementDocTypeEnum } from "./BlanketAgreementDocTypeEnum";
import type { BoStatus } from "./BoStatus";
import type { BADocumentStatus } from "./BADocumentStatus";

export type BlanketAgreementsDocument = {
	AgreementRowNumber: number | null;
	DocumentType: BlanketAgreementDocTypeEnum | null;
	DocumentNo: number | null;
	DocumentRowNumber: number | null;
	DocumentDate: Date | null;
	ItemNo: string | null;
	ItemDescription: string | null;
	UnitPrice: number | null;
	Quantity: number | null;
	Discount: number | null;
	UoM: string | null;
	RowStatus: BoStatus | null;
	UoMCode: string | null;
	UnitsOfMeasurement: number | null;
	DocStatus: BADocumentStatus | null;
}
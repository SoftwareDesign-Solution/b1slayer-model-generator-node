import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { MaterialRevaluationLine } from "./MaterialRevaluationLine";
import type { MaterialRevaluationDocumentReferences } from "./MaterialRevaluationDocumentReferences";

export type MaterialRevaluation = {
	DocNum: number | null;
	DocDate: Date | null;
	Reference1: string | null;
	Reference2: string | null;
	Comments: string | null;
	JournalMemo: string | null;
	DocTime: TimeOfDay | null;
	Series: number | null;
	TaxDate: Date | null;
	DocEntry: number;
	CreationDate: Date | null;
	UpdateDate: Date | null;
	TransNum: number | null;
	RevalType: string | null;
	RevaluationIncomeAccount: string | null;
	RevaluationExpenseAccount: string | null;
	DataSource: string | null;
	UserSignature: number | null;
	InflationRevaluation: BoYesNoEnum | null;
	CardCode: string | null;
	CardName: string | null;
	U_CKSDMSID: number | null;
	U_CKSDMSFILEID: number | null;
	U_CKSDMSPRINTGUID: string | null;
	U_CKS_BarcodeID: string | null;
	MaterialRevaluationLines: MaterialRevaluationLine[] | null;
	MaterialRevaluationDocumentReferencesCollection: MaterialRevaluationDocumentReferences[] | null;
}
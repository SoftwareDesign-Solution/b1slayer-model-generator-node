import type { BoAdEpnsDistribMethods } from "./BoAdEpnsDistribMethods";

export type DocumentAdditionalIntrastatExpense = {
	ExpenseCode: number | null;
	LineTotal: number | null;
	LineTotalFC: number | null;
	LineTotalSys: number | null;
	PaidToDate: number | null;
	PaidToDateFC: number | null;
	PaidToDateSys: number | null;
	DistributionMethod: BoAdEpnsDistribMethods | null;
	BaseDocEntry: number | null;
	BaseDocLine: number | null;
	BaseDocType: number | null;
	BaseDocumentReference: number | null;
	LineNum: number | null;
}
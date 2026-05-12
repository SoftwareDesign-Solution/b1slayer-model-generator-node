import type { BoStatus } from "./BoStatus";

export type WithholdingTaxLine = {
	WTCode: string | null;
	WTAmountSys: number | null;
	WTAmountFC: number | null;
	WTAmount: number | null;
	WithholdingType: string | null;
	TaxableAmountinSys: number | null;
	TaxableAmountFC: number | null;
	TaxableAmount: number | null;
	RoundingType: string | null;
	Rate: number | null;
	Criteria: string | null;
	Category: string | null;
	BaseType: string | null;
	AppliedWTAmountSys: number | null;
	AppliedWTAmountFC: number | null;
	AppliedWTAmount: number | null;
	GLAccount: string | null;
	LineNum: number | null;
	BaseDocEntry: number | null;
	BaseDocLine: number | null;
	BaseDocType: number | null;
	BaseDocumentReference: number | null;
	Status: BoStatus | null;
	TargetAbsEntry: number | null;
	TargetDocumentType: number | null;
	CSTCodeIncoming: string | null;
	CSTCodeOutgoing: string | null;
	Doc1LineNum: number | null;
}
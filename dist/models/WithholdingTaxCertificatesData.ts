import type { WTGroups } from "./WTGroups";

export type WithholdingTaxCertificatesData = {
	POICodeRef: string | null;
	POICode: string | null;
	Certificate: string | null;
	WTaxType: string | null;
	PeriodIndicator: string | null;
	WhtAbsId: number | null;
	Series: number | null;
	Number: number | null;
	IssueDate: Date | null;
	SumVATAmount: number | null;
	SumDocTotal: number | null;
	SumBaseAmount: number | null;
	SumAccumAmount: number | null;
	SumPercAmount: number | null;
	WTGroupsCollection: WTGroups[] | null;
}
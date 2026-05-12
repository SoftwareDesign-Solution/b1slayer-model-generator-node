import type { DocsInWTGroups } from "./DocsInWTGroups";

export type WTGroups = {
	WTAbsEntry: number | null;
	Percent: number | null;
	SumVATAmount: number | null;
	SumDocTotal: number | null;
	SumBaseAmount: number | null;
	SumAccumAmount: number | null;
	SumPerceptAmount: number | null;
	DocsInWTGroupsCollection: DocsInWTGroups[] | null;
}
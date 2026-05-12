import type { DeductionTaxHierarchies_Line } from "./DeductionTaxHierarchies_Line";

export type DeductionTaxHierarchy = {
	AbsEntry: number;
	BPCode: string | null;
	HierarchyCode: string | null;
	HierarchyName: string | null;
	ValidFrom: Date | null;
	ValidUntil: Date | null;
	DeductionPercent: number | null;
	MaximumTotal: number | null;
	LastUpdated: Date | null;
	DeductionTaxHierarchies_Lines: DeductionTaxHierarchies_Line[] | null;
}
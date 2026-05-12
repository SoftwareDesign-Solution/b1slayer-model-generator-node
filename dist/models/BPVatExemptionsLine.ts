import type { BoYesNoEnum } from "./BoYesNoEnum";

export type BPVatExemptionsLine = {
	AbsoluteEntry: number | null;
	LineNumber: number | null;
	ExemptionDocNum: string | null;
	IssueDate: Date | null;
	IssueTime: TimeOfDay | null;
	ExemptionType: number | null;
	ApplyAllItems: BoYesNoEnum | null;
	ItemCode: string | null;
	ItemDescription: string | null;
	VATRate: number | null;
	TaxCode: string | null;
	AuthoritiesName: string | null;
	ValidFrom: Date | null;
	ValidTo: Date | null;
	VisualOrder: number | null;
}
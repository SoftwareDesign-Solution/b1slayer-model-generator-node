import type { BPVatExemptionsLine } from "./BPVatExemptionsLine";

export type BPVatExemptions = {
	AbsoluteEntry: number;
	BPCode: string | null;
	Remarks: string | null;
	BPVatExemptionsLines: BPVatExemptionsLine[] | null;
}
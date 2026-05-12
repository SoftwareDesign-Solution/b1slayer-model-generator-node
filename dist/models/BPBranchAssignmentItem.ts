import type { BoYesNoEnum } from "./BoYesNoEnum";

export type BPBranchAssignmentItem = {
	BPCode: string | null;
	BPLID: number | null;
	DisabledForBP: BoYesNoEnum | null;
}
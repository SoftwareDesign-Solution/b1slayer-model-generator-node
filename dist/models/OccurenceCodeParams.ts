import type { BoBoeStatus } from "./BoBoeStatus";
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type OccurenceCodeParams = {
	AbsEntry: number | null;
	Code: string | null;
	Description: string | null;
	Note: string | null;
	RequestedBoeStatus: BoBoeStatus | null;
	IsMovement: BoYesNoEnum | null;
}
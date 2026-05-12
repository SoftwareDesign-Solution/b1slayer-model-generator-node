import type { BoBoeStatus } from "./BoBoeStatus";
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type OccurenceCode = {
	AbsEntry: number;
	Code: string | null;
	Description: string | null;
	Note: string | null;
	RequestedBoeStatus: BoBoeStatus | null;
	IsMovement: BoYesNoEnum | null;
}
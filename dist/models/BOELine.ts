import type { BoBoeStatus } from "./BoBoeStatus";
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type BOELine = {
	BOEKey: number | null;
	BOENumber: number | null;
	DueDate: Date | null;
	Bank: string | null;
	Branch: string | null;
	AccountNumber: string | null;
	Amount: number | null;
	BOEStatus: BoBoeStatus | null;
	Transferred: BoYesNoEnum | null;
}
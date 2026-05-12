import type { BoYesNoEnum } from "./BoYesNoEnum";

export type SalesStage = {
	SequenceNo: number;
	Name: string | null;
	Stageno: number | null;
	ClosingPercentage: number | null;
	Cancelled: BoYesNoEnum | null;
	IsSales: BoYesNoEnum | null;
	IsPurchasing: BoYesNoEnum | null;
}
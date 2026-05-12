import type { BoYesNoEnum } from "./BoYesNoEnum";

export type CustomsGroup = {
	Code: number;
	Name: string | null;
	Number: string | null;
	Customs: number | null;
	Purchase: number | null;
	Other: number | null;
	Total: number | null;
	Locked: BoYesNoEnum | null;
	CustomsAllocationAccount: string | null;
	CustomsExpenseAccount: string | null;
	PortAddress: string | null;
	PortState: string | null;
}
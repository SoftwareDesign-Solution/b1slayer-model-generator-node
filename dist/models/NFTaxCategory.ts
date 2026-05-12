import type { BoYesNoEnum } from "./BoYesNoEnum";

export type NFTaxCategory = {
	AbsId: number;
	Code: string | null;
	Locked: BoYesNoEnum | null;
	GPCId: number | null;
	CESTrel: BoYesNoEnum | null;
}
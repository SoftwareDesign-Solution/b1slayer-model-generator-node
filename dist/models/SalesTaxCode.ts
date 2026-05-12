import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { SalesTaxCodes_Line } from "./SalesTaxCodes_Line";

export type SalesTaxCode = {
	ValidForAR: BoYesNoEnum | null;
	ValidForAP: BoYesNoEnum | null;
	UserSignature: number | null;
	Rate: number | null;
	Name: string | null;
	Freight: BoYesNoEnum | null;
	Code: string;
	IsItemLevel: BoYesNoEnum | null;
	Inactive: BoYesNoEnum | null;
	FADebit: BoYesNoEnum | null;
	SalesTaxCodes_Lines: SalesTaxCodes_Line[] | null;
}
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type DefaultDocument = {
	AddExport: BoYesNoEnum | null;
	AddPrint: BoYesNoEnum | null;
	Code: string | null;
	EnglishKeyboardEnteringBPC: BoYesNoEnum | null;
	NoofCopies: number | null;
	NoofCopiesforManualDoc: number | null;
	ObjectType: string | null;
	PermanentRemark: string | null;
	PrintDiscountData: BoYesNoEnum | null;
	PrintToals: BoYesNoEnum | null;
	PrintVendorCatalogNo: BoYesNoEnum | null;
	TotalsRounding: BoYesNoEnum | null;
}
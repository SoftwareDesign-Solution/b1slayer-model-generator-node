import type { BoYesNoEnum } from "./BoYesNoEnum";

export type Project = {
	Code: string;
	Name: string | null;
	ValidFrom: Date | null;
	ValidTo: Date | null;
	Active: BoYesNoEnum | null;
	U_CKSDMSID: number | null;
	U_CKSDMSFILEID: number | null;
	U_CKSDMSPRINTGUID: string | null;
	U_CKS_BarcodeID: string | null;
}
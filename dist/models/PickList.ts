import type { BoPickStatus } from "./BoPickStatus";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { PickListsLine } from "./PickListsLine";

export type PickList = {
	Absoluteentry: number;
	Name: string | null;
	OwnerCode: number | null;
	OwnerName: string | null;
	PickDate: Date | null;
	Remarks: string | null;
	Status: BoPickStatus | null;
	ObjectType: string | null;
	UseBaseUnits: BoYesNoEnum | null;
	U_CKSDMSID: number | null;
	U_CKSDMSFILEID: number | null;
	U_CKSDMSPRINTGUID: string | null;
	U_CKS_BarcodeID: string | null;
	PickListsLines: PickListsLine[] | null;
}
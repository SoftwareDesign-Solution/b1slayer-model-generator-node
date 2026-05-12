import type { EcmActionStatusEnum } from "./EcmActionStatusEnum";

export type AFEFceActionGetByFceID = {
	SrcObjType: string | null;
	DocSubType: string | null;
	SrcObjAbs: number | null;
	AssignedID: string | null;
	FCE_ID: number | null;
	FCE_TotalVal: number | null;
	FCE_Currency: string | null;
	FCE_DcApStat: string | null;
	ActStatus: EcmActionStatusEnum | null;
	FCE_DocType: number | null;
	FCE_POI: string | null;
	FCE_Folio: number | null;
	FCE_RjRsnCod: string | null;
	FCE_RjRsnDes: string | null;
	GUID: string | null;
	AbsEntry: number | null;
}
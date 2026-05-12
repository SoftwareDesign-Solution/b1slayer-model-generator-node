import type { VPS_DATEV_NTREC1 } from "./VPS_DATEV_NTREC1";

export type VPS_DATEV_NETTING = {
	DocNum: number | null;
	Period: number | null;
	Instance: number | null;
	Series: number | null;
	Handwrtten: string | null;
	Status: string | null;
	RequestStatus: string | null;
	Creator: string | null;
	Remark: string | null;
	DocEntry: number;
	Canceled: string | null;
	Object: string | null;
	LogInst: number | null;
	UserSign: number | null;
	Transfered: string | null;
	CreateDate: Date | null;
	CreateTime: TimeOfDay | null;
	UpdateDate: Date | null;
	UpdateTime: TimeOfDay | null;
	DataSource: string | null;
	U_RECDATE: Date | null;
	U_DIFTRNID: number | null;
	U_CREDCOD: string | null;
	U_CREDNAM: string | null;
	U_DEBTCOD: string | null;
	U_DEBTNAM: string | null;
	U_DIFFSALD: number | null;
	VPS_DATEV_NTREC1Collection: VPS_DATEV_NTREC1[] | null;
}
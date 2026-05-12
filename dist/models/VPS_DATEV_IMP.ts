import type { VPS_DATEV_IMPT } from "./VPS_DATEV_IMPT";

export type VPS_DATEV_IMP = {
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
	U_IMPFILE: string | null;
	U_STAPELNO: string | null;
	U_MANDANTNO: string | null;
	VPS_DATEV_IMPTCollection: VPS_DATEV_IMPT[] | null;
}
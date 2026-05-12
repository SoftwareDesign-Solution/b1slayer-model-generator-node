import type { VPS_DATEV_PRORATAT } from "./VPS_DATEV_PRORATAT";

export type VPS_DATEV_PRORATA = {
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
	U_DOCENTRY: number;
	U_OBJTYPE: number;
	U_PRTYPE: string;
	VPS_DATEV_PRORATATCollection: VPS_DATEV_PRORATAT[] | null;
}
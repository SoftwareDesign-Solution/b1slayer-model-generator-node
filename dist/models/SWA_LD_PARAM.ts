import type { SWA_LD_PARAMFTYPE } from "./SWA_LD_PARAMFTYPE";

export type SWA_LD_PARAM = {
	Code: string;
	Name: string | null;
	DocEntry: number | null;
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
	U_Template: string;
	U_Key: string | null;
	U_PType: string | null;
	U_ItemId: string | null;
	U_MatrixId: string | null;
	U_VisOrder: string | null;
	U_ShowPrw: string | null;
	SWA_LD_PARAMFTYPECollection: SWA_LD_PARAMFTYPE[] | null;
}
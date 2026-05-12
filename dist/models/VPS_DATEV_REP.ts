export type VPS_DATEV_REP = {
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
	U_B1REPDEF: string | null;
	U_INSTVER: string | null;
	U_REPTYPECODE: string | null;
	U_EXPORTFILENAME: string | null;
	U_EXPORTPATH: string | null;
}
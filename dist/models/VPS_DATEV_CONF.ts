export type VPS_DATEV_CONF = {
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
	U_LICKEY: string | null;
	U_INSTVER: string | null;
	U_DEBUG: string;
	U_LICACCBY: string | null;
	U_SQLCON: string | null;
}
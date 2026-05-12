export type SWA_LD_FORMTYPE = {
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
	U_FormType: string | null;
	U_ObjectId: string | null;
	U_Replace: string | null;
	U_With: string | null;
	U_Ignore: string;
	U_Category: string | null;
}
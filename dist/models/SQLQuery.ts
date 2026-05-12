export type SQLQuery = {
	SqlCode: string;
	SqlName: string | null;
	SqlText: string | null;
	ParamList: string | null;
	CreateDate: Date | null;
	UpdateDate: Date | null;
}
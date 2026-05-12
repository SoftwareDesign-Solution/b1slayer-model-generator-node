import type { COR_CUSTOM_EFCOND } from "./COR_CUSTOM_EFCOND";

export type COR_CUSTOM_EFRULE = {
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
	U_RuleName: string | null;
	U_RuleDesc: string | null;
	U_Query: string | null;
	U_ProcInnerEvents: string | null;
	U_RuleId: string | null;
	U_Version: number | null;
	COR_CUSTOM_EFCONDCollection: COR_CUSTOM_EFCOND[] | null;
}
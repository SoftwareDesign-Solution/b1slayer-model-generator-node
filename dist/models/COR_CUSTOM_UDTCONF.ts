import type { COR_CUSTOM_UDTPARAM } from "./COR_CUSTOM_UDTPARAM";

export type COR_CUSTOM_UDTCONF = {
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
	U_NameId: string | null;
	U_TableName: string | null;
	U_Filter: string | null;
	U_OrderBy: string | null;
	U_SrcFType: string | null;
	U_MenuId: string | null;
	U_MenuFather: string | null;
	U_MenuDesc: string | null;
	U_FormDesc: string | null;
	U_UDTFType: string | null;
	U_Add: string | null;
	U_Delete: string | null;
	U_Update: string | null;
	U_InActive: string | null;
	U_FnBtn: string | null;
	U_DIAPI: string | null;
	U_RuleId: string | null;
	U_Version: number | null;
	COR_CUSTOM_UDTPARAMCollection: COR_CUSTOM_UDTPARAM[] | null;
}
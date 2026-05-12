import type { COR_CUSTOM_RFROW } from "./COR_CUSTOM_RFROW";
import type { COR_CUSTOM_RFACT } from "./COR_CUSTOM_RFACT";

export type COR_CUSTOM_RFRULE = {
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
	U_ExcludeLastRow: string | null;
	U_IgnoreSubTotals: string | null;
	U_MatrixId: string | null;
	U_ScanDirection: number | null;
	U_RuleId: string | null;
	U_Version: number | null;
	COR_CUSTOM_RFROWCollection: COR_CUSTOM_RFROW[] | null;
	COR_CUSTOM_RFACTCollection: COR_CUSTOM_RFACT[] | null;
}
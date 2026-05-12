import type { UserQueryTypeEnum } from "./UserQueryTypeEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type UserQuery = {
	InternalKey: number;
	QueryCategory: number;
	QueryDescription: string | null;
	Query: string | null;
	ProcedureAlias: string | null;
	ProcedureName: string | null;
	QueryType: UserQueryTypeEnum | null;
	MenuCaption: string | null;
	ParentMenuID: number | null;
	MenuPosition: number | null;
	MenuUniqueID: string | null;
	EnableMenuEntry: BoYesNoEnum | null;
}
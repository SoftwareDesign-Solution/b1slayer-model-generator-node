import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { BoUDOObjType } from "./BoUDOObjType";
import type { UserObjectMD_ChildTable } from "./UserObjectMD_ChildTable";
import type { UserObjectMD_FindColumn } from "./UserObjectMD_FindColumn";
import type { UserObjectMD_FormColumn } from "./UserObjectMD_FormColumn";
import type { UserObjectMD_EnhancedFormColumn } from "./UserObjectMD_EnhancedFormColumn";

export type UserObjectsMD = {
	TableName: string | null;
	Code: string;
	LogTableName: string | null;
	CanCreateDefaultForm: BoYesNoEnum | null;
	ObjectType: BoUDOObjType | null;
	ExtensionName: string | null;
	CanCancel: BoYesNoEnum | null;
	CanDelete: BoYesNoEnum | null;
	CanLog: BoYesNoEnum | null;
	ManageSeries: BoYesNoEnum | null;
	CanFind: BoYesNoEnum | null;
	CanYearTransfer: BoYesNoEnum | null;
	Name: string | null;
	CanClose: BoYesNoEnum | null;
	OverwriteDllfile: BoYesNoEnum | null;
	UseUniqueFormType: BoYesNoEnum | null;
	CanArchive: BoYesNoEnum | null;
	MenuItem: BoYesNoEnum | null;
	MenuCaption: string | null;
	FatherMenuID: number | null;
	Position: number | null;
	MenuUID: string | null;
	EnableEnhancedForm: BoYesNoEnum | null;
	RebuildEnhancedForm: BoYesNoEnum | null;
	FormSRF: string | null;
	ApplyAuthorization: BoYesNoEnum | null;
	UserObjectMD_ChildTables: UserObjectMD_ChildTable[] | null;
	UserObjectMD_FindColumns: UserObjectMD_FindColumn[] | null;
	UserObjectMD_FormColumns: UserObjectMD_FormColumn[] | null;
	UserObjectMD_EnhancedFormColumns: UserObjectMD_EnhancedFormColumn[] | null;
}
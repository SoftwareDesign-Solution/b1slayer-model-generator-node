import type { BoUPTOptions } from "./BoUPTOptions";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { UserPermissionForm } from "./UserPermissionForm";

export type UserPermissionTree = {
	UserSignature: number | null;
	DisplayOrder: number | null;
	PermissionID: string;
	Options: BoUPTOptions | null;
	Name: string | null;
	Levels: number | null;
	IsItem: BoYesNoEnum | null;
	ParentID: string | null;
	UserPermissionForms: UserPermissionForm[] | null;
}
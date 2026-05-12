import type { UserMenuItemTypeEnum } from "./UserMenuItemTypeEnum";

export type UserMenuItem = {
	Name: string | null;
	Position: number | null;
	Type: UserMenuItemTypeEnum | null;
	LinkedObjType: string | null;
	LinkedObjKey: string | null;
	LinkedFormMenuID: number | null;
	LinkedFormNum: number | null;
	ReportPath: string | null;
}
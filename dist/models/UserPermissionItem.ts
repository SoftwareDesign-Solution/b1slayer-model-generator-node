import type { BoPermission } from "./BoPermission";

export type UserPermissionItem = {
	UserCode: number | null;
	PermissionID: string | null;
	Permission: BoPermission | null;
}
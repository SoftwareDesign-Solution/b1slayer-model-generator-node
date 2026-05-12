import type { AlertManagementTypeEnum } from "./AlertManagementTypeEnum";

export type AlertManagementParams = {
	Code: number | null;
	Type: AlertManagementTypeEnum | null;
	Name: string | null;
}
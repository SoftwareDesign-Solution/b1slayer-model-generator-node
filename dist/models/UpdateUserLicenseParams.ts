import type { LicenseTypeEnum } from "./LicenseTypeEnum";
import type { LicenseUpdateTypeEnum } from "./LicenseUpdateTypeEnum";

export type UpdateUserLicenseParams = {
	UserName: string | null;
	LicenseType: LicenseTypeEnum | null;
	LicenseUpdateType: LicenseUpdateTypeEnum | null;
}
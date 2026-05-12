import type { MobileAddonSettingTypeEnum } from "./MobileAddonSettingTypeEnum";
import type { ViewStyleTypeEnum } from "./ViewStyleTypeEnum";
import type { LogonMethodEnum } from "./LogonMethodEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type MobileAddOnSetting = {
	Code: string;
	Description: string | null;
	Url: string | null;
	Type: MobileAddonSettingTypeEnum | null;
	Provider: string | null;
	ViewStyle: ViewStyleTypeEnum | null;
	LogonMethod: LogonMethodEnum | null;
	Enable: BoYesNoEnum | null;
	B1MobileApp: BoYesNoEnum | null;
	B1SalesApp: BoYesNoEnum | null;
	B1ServiceApp: BoYesNoEnum | null;
}
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type TechnicianSettingsGroup = {
	Code: number | null;
	Name: string | null;
	CustomizedGroup: BoYesNoEnum | null;
	EnableEditTime: BoYesNoEnum | null;
	EnableReject: BoYesNoEnum | null;
	EnableResign: BoYesNoEnum | null;
	EnableFollowup: BoYesNoEnum | null;
	EnableSignature: BoYesNoEnum | null;
	EnableStarRating: BoYesNoEnum | null;
	EnableActualDuration: BoYesNoEnum | null;
	AdvancedDashBoard: number | null;
}
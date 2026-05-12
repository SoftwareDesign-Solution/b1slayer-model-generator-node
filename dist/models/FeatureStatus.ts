import type { BoYesNoEnum } from "./BoYesNoEnum";

export type FeatureStatus = {
	FeatureID: string | null;
	Blocked: BoYesNoEnum | null;
}
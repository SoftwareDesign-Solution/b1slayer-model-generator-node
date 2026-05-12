import type { BoYesNoEnum } from "./BoYesNoEnum";

export type DppChangeParams = {
	FromDate: Date | null;
	FromTime: TimeOfDay | null;
	HasChanged: BoYesNoEnum | null;
}
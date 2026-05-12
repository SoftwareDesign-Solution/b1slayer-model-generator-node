import type { BoYesNoEnum } from "./BoYesNoEnum";

export type PMC_ActivityData = {
	ActivityID: number | null;
	ActivityType: string | null;
	LaborItem: string | null;
	IsChargeable: BoYesNoEnum | null;
	IsAbsence: BoYesNoEnum | null;
}
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type ActivitySubject = {
	Code: number;
	Description: string | null;
	ActivityType: number | null;
	IsActive: BoYesNoEnum | null;
}
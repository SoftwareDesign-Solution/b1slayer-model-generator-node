import type { BoYesNoEnum } from "./BoYesNoEnum";

export type ActivityRecipientListParams = {
	Code: number | null;
	Name: string | null;
	Active: BoYesNoEnum | null;
	IsMultiple: BoYesNoEnum | null;
}
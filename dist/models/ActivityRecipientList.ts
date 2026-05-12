import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { ActivityRecipient } from "./ActivityRecipient";

export type ActivityRecipientList = {
	Code: number;
	Name: string | null;
	Active: BoYesNoEnum | null;
	IsMultiple: BoYesNoEnum | null;
	ActivityRecipientCollection: ActivityRecipient[] | null;
}
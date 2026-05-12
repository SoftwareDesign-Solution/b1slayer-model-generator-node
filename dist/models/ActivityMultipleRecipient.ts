import type { ActivityRecipientObjTypeEnum } from "./ActivityRecipientObjTypeEnum";

export type ActivityMultipleRecipient = {
	LineNumer: number | null;
	RecipientType: ActivityRecipientObjTypeEnum | null;
	RecipientCode: string | null;
}
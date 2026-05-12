import type { RecipientTypeEnum } from "./RecipientTypeEnum";

export type ActivityRecipient = {
	LineNumber: number | null;
	RecipientType: RecipientTypeEnum | null;
	RecipientCode: string | null;
}
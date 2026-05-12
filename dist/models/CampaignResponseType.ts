import type { BoYesNoEnum } from "./BoYesNoEnum";

export type CampaignResponseType = {
	ResponseTypeDescription: string | null;
	ResponseType: string;
	IsActive: BoYesNoEnum | null;
}
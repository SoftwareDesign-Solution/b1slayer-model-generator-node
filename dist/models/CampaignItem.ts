import type { CampaignItemTypeEnum } from "./CampaignItemTypeEnum";

export type CampaignItem = {
	CampaignNumber: number | null;
	CampaignLineNumber: number | null;
	ItemCode: string | null;
	ItemName: string | null;
	ItemType: CampaignItemTypeEnum | null;
	ItemGroup: string | null;
}
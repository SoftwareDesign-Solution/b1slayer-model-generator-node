import type { CampaignTypeEnum } from "./CampaignTypeEnum";
import type { CampaignStatusEnum } from "./CampaignStatusEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { TargetGroupTypeEnum } from "./TargetGroupTypeEnum";
import type { CampaignBusinessPartner } from "./CampaignBusinessPartner";
import type { CampaignItem } from "./CampaignItem";
import type { CampaignPartner } from "./CampaignPartner";

export type Campaign = {
	CampaignNumber: number;
	CampaignName: string | null;
	CampaignType: CampaignTypeEnum | null;
	TargetGroup: string | null;
	Owner: number | null;
	Status: CampaignStatusEnum | null;
	StartDate: Date | null;
	FinishDate: Date | null;
	Remarks: string | null;
	GeneratedByWizard: BoYesNoEnum | null;
	AttachementsEntry: number | null;
	TargetGroupType: TargetGroupTypeEnum | null;
	CampaignBusinessPartners: CampaignBusinessPartner[] | null;
	CampaignItems: CampaignItem[] | null;
	CampaignPartners: CampaignPartner[] | null;
}
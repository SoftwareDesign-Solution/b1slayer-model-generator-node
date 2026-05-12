import type { BoYesNoEnum } from "./BoYesNoEnum";

export type WebClientDashboardCard = {
	Guid: string | null;
	UserId: number | null;
	Content: string | null;
	Sys: BoYesNoEnum | null;
	Version: string | null;
}
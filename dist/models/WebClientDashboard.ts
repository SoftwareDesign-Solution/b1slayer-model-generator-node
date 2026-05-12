import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { WebClientDashboardCard } from "./WebClientDashboardCard";

export type WebClientDashboard = {
	Guid: string;
	UserId: number | null;
	Content: string | null;
	Sys: BoYesNoEnum | null;
	WebClientDashboardCards: WebClientDashboardCard[] | null;
}
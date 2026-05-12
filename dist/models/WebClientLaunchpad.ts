import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { WebClientLaunchpadGroup } from "./WebClientLaunchpadGroup";

export type WebClientLaunchpad = {
	Guid: string;
	UserId: number | null;
	ThemeId: string | null;
	DisplayQuickView: BoYesNoEnum | null;
	NotificationShowDays: number | null;
	WebClientLaunchpadGroups: WebClientLaunchpadGroup[] | null;
}
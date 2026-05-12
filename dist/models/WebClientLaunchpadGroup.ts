import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { WebClientLaunchpadTile } from "./WebClientLaunchpadTile";

export type WebClientLaunchpadGroup = {
	Guid: string | null;
	Order: number | null;
	GroupId: string | null;
	GroupName: string | null;
	Visible: BoYesNoEnum | null;
	WebClientLaunchpadTiles: WebClientLaunchpadTile[] | null;
}
import type { WebClientFormSettingItem } from "./WebClientFormSettingItem";

export type WebClientFormSetting = {
	Guid: string;
	FormId: string | null;
	UserId: number | null;
	DocObjectCode: string | null;
	WebClientFormSettingItems: WebClientFormSettingItem[] | null;
}
import type { WebClientListviewFilterCondition } from "./WebClientListviewFilterCondition";

export type WebClientListviewFilter = {
	Guid: string;
	UserId: number | null;
	TableName: string | null;
	FilterName: string | null;
	WebClientListviewFilterConditions: WebClientListviewFilterCondition[] | null;
}
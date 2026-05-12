import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { QueueMember } from "./QueueMember";

export type Queue = {
	QueueID: string;
	Description: string | null;
	Inactive: BoYesNoEnum | null;
	QueueManager: number | null;
	QueueEmail: string | null;
	QueueMembers: QueueMember[] | null;
}
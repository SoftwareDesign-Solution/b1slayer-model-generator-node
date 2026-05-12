import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { BoMsgPriorities } from "./BoMsgPriorities";
import type { BoActivities } from "./BoActivities";

export type ActivityParams = {
	ActivityCode: number | null;
	CardCode: string | null;
	Notes: string | null;
	StartDate: Date | null;
	Closed: BoYesNoEnum | null;
	DocType: string | null;
	DocNum: string | null;
	DocEntry: string | null;
	Priority: BoMsgPriorities | null;
	Details: string | null;
	Activity: BoActivities | null;
	StartTime: TimeOfDay | null;
	EndTime: TimeOfDay | null;
	HandledBy: number | null;
	City: string | null;
	Street: string | null;
	Room: string | null;
	InactiveFlag: BoYesNoEnum | null;
	State: string | null;
	Country: string | null;
	TentativeFlag: BoYesNoEnum | null;
	EndDueDate: Date | null;
	SalesOpportunityId: number | null;
	SalesOpportunityLine: number | null;
}
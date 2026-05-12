import type { ThreatLevelEnum } from "./ThreatLevelEnum";

export type SalesOpportunitiesCompetitionItem = {
	RowNo: number | null;
	Competition: number | null;
	Details: string | null;
	SequenceNo: number | null;
	WonOrLost: string | null;
	ThreatLevel: ThreatLevelEnum | null;
}
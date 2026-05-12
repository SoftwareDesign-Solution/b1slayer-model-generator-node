import type { ThreatLevelEnum } from "./ThreatLevelEnum";

export type SalesOpportunityCompetitorSetup = {
	SequenceNo: number;
	Name: string | null;
	ThreatLevel: ThreatLevelEnum | null;
	Details: string | null;
}
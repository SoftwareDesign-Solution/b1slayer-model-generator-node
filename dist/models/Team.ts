import type { TeamMember } from "./TeamMember";

export type Team = {
	TeamID: number;
	TeamName: string | null;
	Description: string | null;
	TeamMembers: TeamMember[] | null;
}
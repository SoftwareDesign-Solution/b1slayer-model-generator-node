import type { BoRoleInTeam } from "./BoRoleInTeam";

export type TeamMember = {
	TeamID: number | null;
	EmployeeID: number | null;
	RoleInTeam: BoRoleInTeam | null;
}
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type TechnicianSchedulings = {
	ServiceCallID: number | null;
	SchedulingLineNum: number | null;
	StartDate: Date | null;
	EndDate: Date | null;
	IsClosed: BoYesNoEnum | null;
}
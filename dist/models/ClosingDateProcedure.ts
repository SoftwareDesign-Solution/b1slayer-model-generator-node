import type { BoClosingDateProcedureBaseDateEnum } from "./BoClosingDateProcedureBaseDateEnum";
import type { BoClosingDateProcedureDueMonthEnum } from "./BoClosingDateProcedureDueMonthEnum";

export type ClosingDateProcedure = {
	ClosingDateNum: number;
	ClosingDateCode: string | null;
	BaselineDate: BoClosingDateProcedureBaseDateEnum | null;
	DueMonth: BoClosingDateProcedureDueMonthEnum | null;
	ExtraMonth: number | null;
	ExtraDay: number | null;
}
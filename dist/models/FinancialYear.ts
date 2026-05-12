import type { TCSAccumulationBaseEnum } from "./TCSAccumulationBaseEnum";

export type FinancialYear = {
	AbsEntry: number;
	Code: string | null;
	Description: string | null;
	StartDate: Date | null;
	EndDate: Date | null;
	AssessYear: string | null;
	TCSAccumulationBase: TCSAccumulationBaseEnum | null;
}
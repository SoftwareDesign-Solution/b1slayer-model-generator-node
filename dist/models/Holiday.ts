import type { BoWeekEnum } from "./BoWeekEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { BoWeekNoRuleEnum } from "./BoWeekNoRuleEnum";
import type { HolidayDate } from "./HolidayDate";

export type Holiday = {
	HolidayCode: string;
	WeekendFrom: BoWeekEnum | null;
	WeekendTO: BoWeekEnum | null;
	ValidForOneYearOnly: BoYesNoEnum | null;
	SetWeekendsAsWorkDays: string | null;
	WeekNoRule: BoWeekNoRuleEnum | null;
	HolidayDates: HolidayDate[] | null;
}
import type { ResourceDailyCapacityWeekdayEnum } from "./ResourceDailyCapacityWeekdayEnum";

export type ResourceDailyCapacity = {
	Code: string | null;
	Weekday: ResourceDailyCapacityWeekdayEnum | null;
	Factor1: number | null;
	Factor2: number | null;
	Factor3: number | null;
	Factor4: number | null;
	Total: number | null;
	Remarks: string | null;
	SingleRun: number | null;
}
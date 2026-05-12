import type { BoFrequency } from "./BoFrequency";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { RepeatOptionEnum } from "./RepeatOptionEnum";
import type { RecurrenceSequenceEnum } from "./RecurrenceSequenceEnum";
import type { RecurrenceDayOfWeekEnum } from "./RecurrenceDayOfWeekEnum";
import type { EndTypeEnum } from "./EndTypeEnum";

export type InventoryCycles = {
	CycleCode: number;
	CycleName: string | null;
	Frequency: BoFrequency | null;
	Day: number | null;
	Hour: TimeOfDay | null;
	NextCountingDate: Date | null;
	Interval: number | null;
	Sunday: BoYesNoEnum | null;
	Monday: BoYesNoEnum | null;
	Tuesday: BoYesNoEnum | null;
	Wednesday: BoYesNoEnum | null;
	Thursday: BoYesNoEnum | null;
	Friday: BoYesNoEnum | null;
	Saturday: BoYesNoEnum | null;
	RepeatOption: RepeatOptionEnum | null;
	RecurrenceSequenceSpecifier: RecurrenceSequenceEnum | null;
	RecurrenceDayInMonth: number | null;
	RecurrenceMonth: number | null;
	RecurrenceDayOfWeek: RecurrenceDayOfWeekEnum | null;
	endType: EndTypeEnum | null;
	MaxOccurrence: number | null;
	SeriesEndDate: Date | null;
}
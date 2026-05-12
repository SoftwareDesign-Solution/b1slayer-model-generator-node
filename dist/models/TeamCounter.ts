import type { CounterTypeEnum } from "./CounterTypeEnum";

export type TeamCounter = {
	DocumentEntry: number | null;
	CounterID: number | null;
	CounterType: CounterTypeEnum | null;
	CounterName: string | null;
	CounterNumber: number | null;
	CounterVisualOrder: number | null;
}
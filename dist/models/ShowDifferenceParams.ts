import type { BoChangeLogEnum } from "./BoChangeLogEnum";

export type ShowDifferenceParams = {
	PrimaryKey: string | null;
	UDOObjectCode: string | null;
	Object: BoChangeLogEnum | null;
	LogInstance2: number | null;
	LogInstance: number | null;
}
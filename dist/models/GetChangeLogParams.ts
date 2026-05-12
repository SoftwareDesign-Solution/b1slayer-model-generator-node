import type { BoChangeLogEnum } from "./BoChangeLogEnum";

export type GetChangeLogParams = {
	PrimaryKey: string | null;
	UDOObjectCode: string | null;
	Object: BoChangeLogEnum | null;
}
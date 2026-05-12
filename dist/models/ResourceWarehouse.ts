import type { BoYesNoEnum } from "./BoYesNoEnum";

export type ResourceWarehouse = {
	Code: string | null;
	Warehouse: string | null;
	Locked: BoYesNoEnum | null;
}
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type ItemGroupsWarehouseInfo = {
	ItmsGrpCod: number | null;
	WarehouseCode: string | null;
	DefaultBin: number | null;
	DefaultBinEnforced: BoYesNoEnum | null;
}
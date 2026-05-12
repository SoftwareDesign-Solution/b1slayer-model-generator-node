import type { KPITypeEnum } from "./KPITypeEnum";
import type { KPI_ItemLine } from "./KPI_ItemLine";

export type KPI = {
	KPICode: string;
	KPIName: string | null;
	KPIType: KPITypeEnum | null;
	NumberOfColumns: number | null;
	KPI_ItemLines: KPI_ItemLine[] | null;
}
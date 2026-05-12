import type { ResourceCapacityTypeEnum } from "./ResourceCapacityTypeEnum";

export type ResourceCapacityWithFilterParams = {
	Code: string | null;
	Warehouse: string | null;
	Date: Date | null;
	Type: ResourceCapacityTypeEnum | null;
}
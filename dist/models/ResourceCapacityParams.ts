import type { ResourceCapacityTypeEnum } from "./ResourceCapacityTypeEnum";
import type { ResourceCapacitySourceTypeEnum } from "./ResourceCapacitySourceTypeEnum";
import type { ResourceCapacityBaseTypeEnum } from "./ResourceCapacityBaseTypeEnum";
import type { ResourceCapacityActionEnum } from "./ResourceCapacityActionEnum";
import type { ResourceCapacityOwningTypeEnum } from "./ResourceCapacityOwningTypeEnum";
import type { ResourceCapacityRevertedTypeEnum } from "./ResourceCapacityRevertedTypeEnum";
import type { ResourceCapacityMemoSourceEnum } from "./ResourceCapacityMemoSourceEnum";

export type ResourceCapacityParams = {
	Id: number | null;
	Code: string | null;
	Warehouse: string | null;
	Date: Date | null;
	Type: ResourceCapacityTypeEnum | null;
	Capacity: number | null;
	SourceType: ResourceCapacitySourceTypeEnum | null;
	SourceEntry: number | null;
	SourceLineNum: number | null;
	BaseType: ResourceCapacityBaseTypeEnum | null;
	BaseEntry: number | null;
	BaseLineNum: number | null;
	Action: ResourceCapacityActionEnum | null;
	OwningType: ResourceCapacityOwningTypeEnum | null;
	OwningEntry: number | null;
	OwningLineNum: number | null;
	RevertedType: ResourceCapacityRevertedTypeEnum | null;
	RevertedEntry: number | null;
	RevertedLineNum: number | null;
	MemoSource: ResourceCapacityMemoSourceEnum | null;
	Memo: string | null;
	SingleRunCapacity: number | null;
	SingleRunMemoSource: ResourceCapacityMemoSourceEnum | null;
	SingleRunMemo: string | null;
}
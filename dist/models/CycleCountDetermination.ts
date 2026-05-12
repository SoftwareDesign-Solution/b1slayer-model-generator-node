import type { CycleCountDeterminationCycleByEnum } from "./CycleCountDeterminationCycleByEnum";
import type { CycleCountDeterminationSetup } from "./CycleCountDeterminationSetup";

export type CycleCountDetermination = {
	WarehouseCode: string;
	CycleBy: CycleCountDeterminationCycleByEnum | null;
	CycleCountDeterminationSetupCollection: CycleCountDeterminationSetup[] | null;
}
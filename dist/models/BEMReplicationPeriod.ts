import type { BEMPeriodicTypeEnum } from "./BEMPeriodicTypeEnum";
import type { BEMReplicationStatusEnum } from "./BEMReplicationStatusEnum";

export type BEMReplicationPeriod = {
	AbsEntry: number;
	ScopeKey: string | null;
	ScopeName: string | null;
	Periodic: BEMPeriodicTypeEnum | null;
	StartDate: Date | null;
	Status: BEMReplicationStatusEnum | null;
	UpdateDate: Date | null;
	LastRepId: string | null;
	RepMessage: string | null;
}
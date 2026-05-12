import type { CardOrAccountEnum } from "./CardOrAccountEnum";
import type { InternalReconciliationOpenTransRow } from "./InternalReconciliationOpenTransRow";
import type { ElectronicProtocol } from "./ElectronicProtocol";

export type InternalReconciliationOpenTrans = {
	ReconDate: Date | null;
	CardOrAccount: CardOrAccountEnum | null;
	BPLId: number | null;
	InternalReconciliationOpenTransRows: InternalReconciliationOpenTransRow[] | null;
	ElectronicProtocols: ElectronicProtocol[] | null;
}
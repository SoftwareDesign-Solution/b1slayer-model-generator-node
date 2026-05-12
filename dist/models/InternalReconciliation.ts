import type { CardOrAccountEnum } from "./CardOrAccountEnum";
import type { ReconTypeEnum } from "./ReconTypeEnum";
import type { InternalReconciliationRow } from "./InternalReconciliationRow";
import type { ElectronicProtocol } from "./ElectronicProtocol";

export type InternalReconciliation = {
	ReconNum: number;
	ReconDate: Date | null;
	CardOrAccount: CardOrAccountEnum | null;
	ReconType: ReconTypeEnum | null;
	Total: number | null;
	CancelAbs: number | null;
	InternalReconciliationRows: InternalReconciliationRow[] | null;
	ElectronicProtocols: ElectronicProtocol[] | null;
}
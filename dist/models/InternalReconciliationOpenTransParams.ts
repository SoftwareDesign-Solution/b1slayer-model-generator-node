import type { CardOrAccountEnum } from "./CardOrAccountEnum";
import type { ReconSelectDateTypeEnum } from "./ReconSelectDateTypeEnum";
import type { InternalReconciliationBP } from "./InternalReconciliationBP";

export type InternalReconciliationOpenTransParams = {
	ReconDate: Date | null;
	CardOrAccount: CardOrAccountEnum | null;
	AccountNo: string | null;
	DateType: ReconSelectDateTypeEnum | null;
	FromDate: Date | null;
	ToDate: Date | null;
	InternalReconciliationBPs: InternalReconciliationBP[] | null;
}
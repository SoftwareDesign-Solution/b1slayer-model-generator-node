import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { CreditOrDebitEnum } from "./CreditOrDebitEnum";

export type InternalReconciliationOpenTransRow = {
	Selected: BoYesNoEnum | null;
	ShortName: string | null;
	TransId: number | null;
	TransRowId: number | null;
	SrcObjTyp: string | null;
	SrcObjAbs: number | null;
	CreditOrDebit: CreditOrDebitEnum | null;
	ReconcileAmount: number | null;
	CashDiscount: number | null;
}
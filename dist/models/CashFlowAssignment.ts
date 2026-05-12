import type { PaymentMeansTypeEnum } from "./PaymentMeansTypeEnum";

export type CashFlowAssignment = {
	CashFlowAssignmentsID: number | null;
	CashFlowLineItemID: number | null;
	Credit: number | null;
	PaymentMeans: PaymentMeansTypeEnum | null;
	CheckNumber: string | null;
	AmountLC: number | null;
	AmountFC: number | null;
	JDTLineId: number | null;
	JDTId: number | null;
}
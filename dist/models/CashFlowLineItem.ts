import type { BoYesNoEnum } from "./BoYesNoEnum";

export type CashFlowLineItem = {
	LineItemID: number;
	LineItemName: string | null;
	ActiveLineItem: BoYesNoEnum | null;
	ParentArticle: number | null;
	Level: number | null;
	Drawer: number | null;
}
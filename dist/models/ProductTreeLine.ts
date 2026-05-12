import type { BoIssueMethod } from "./BoIssueMethod";
import type { ProductionItemType } from "./ProductionItemType";

export type ProductTreeLine = {
	ItemCode: string | null;
	Quantity: number | null;
	Warehouse: string | null;
	Price: number | null;
	Currency: string | null;
	IssueMethod: BoIssueMethod | null;
	InventoryUOM: string | null;
	Comment: string | null;
	ParentItem: string | null;
	PriceList: number | null;
	DistributionRule: string | null;
	Project: string | null;
	DistributionRule2: string | null;
	DistributionRule3: string | null;
	DistributionRule4: string | null;
	DistributionRule5: string | null;
	WipAccount: string | null;
	ItemType: ProductionItemType | null;
	LineText: string | null;
	AdditionalQuantity: number | null;
	StageID: number | null;
	ChildNum: number | null;
	VisualOrder: number | null;
	ItemName: string | null;
	U_GA_Sollmenge: number | null;
	U_GA_ProzentVerlust: number | null;
}
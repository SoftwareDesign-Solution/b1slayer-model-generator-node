export type ItemPriceParams = {
	Date: Date | null;
	UoMEntry: number | null;
	BlanketAgreementNumber: number | null;
	BlanketAgreementLine: number | null;
	UoMQuantity: number | null;
	InventoryQuantity: number | null;
	Currency: string | null;
	ItemCode: string | null;
	CardCode: string | null;
	PriceList: number | null;
}
import type { InventoryAccountTypeEnum } from "./InventoryAccountTypeEnum";

export type AdvancedGLAccountParams = {
	ItemCode: string | null;
	Warehouse: string | null;
	BPCode: string | null;
	FederalTaxID: string | null;
	ShipToCountry: string | null;
	ShipToState: string | null;
	VatGroup: string | null;
	PostingDate: Date | null;
	AccountType: InventoryAccountTypeEnum | null;
	Usage: number | null;
	UDF1: string | null;
	UDF2: string | null;
	UDF3: string | null;
	UDF4: string | null;
	UDF5: string | null;
}
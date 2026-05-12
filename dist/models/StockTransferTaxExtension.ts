import type { BoYesNoEnum } from "./BoYesNoEnum";

export type StockTransferTaxExtension = {
	SupportVAT: BoYesNoEnum | null;
	FormNumber: string | null;
	TransactionCategory: string | null;
	U_GA_Neutr_LieferscheinS: string | null;
	U_GA_Neutr_LieferscheinB: string | null;
	U_CKS_ExtCmpCodeS: string | null;
	U_CKS_ExtCmpCodeB: string | null;
	U_CKS_LeitwegIdS: string | null;
	U_CKS_LeitwegIdB: string | null;
	U_GA_ShopIDS: string | null;
	U_GA_ShopIDB: string | null;
	U_GA_HebebuehneS: string | null;
	U_GA_HebebuehneB: string | null;
}
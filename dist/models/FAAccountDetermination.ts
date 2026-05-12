export type FAAccountDetermination = {
	Code: string;
	Description: string | null;
	AssetBalanceSheetAccount: string | null;
	ClearingAccountAcquisition: string | null;
	RevaluationReserveAccount: string | null;
	RevaluationReserveClearing: string | null;
	OrdinaryDepreciation: string | null;
	AccumulatedOrdinaryDepr: string | null;
	UnplannedDepreciation: string | null;
	AccumulatedUnplannedDepr: string | null;
	SpecialDepreciation: string | null;
	AccumulatedSpecialDepr: string | null;
	RevenuefromAssetSalesNet: string | null;
	RetirementwithExpenseNet: string | null;
	RetirementwithRevenueNet: string | null;
	LeavewithExpenseNBVGross: string | null;
	LeavewithRevenueNBVGross: string | null;
	RevenueAccountforRetirement: string | null;
	RevenueClearingAccount: string | null;
	RevaluationAccount: string | null;
	RevaluationLossAcct: string | null;
}
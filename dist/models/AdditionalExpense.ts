import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { BoAeDistMthd } from "./BoAeDistMthd";
import type { DrawingMethodEnum } from "./DrawingMethodEnum";
import type { FreightTypeEnum } from "./FreightTypeEnum";
import type { SAFTProductTypeEnum } from "./SAFTProductTypeEnum";

export type AdditionalExpense = {
	Name: string | null;
	RevenuesAccount: string | null;
	ExpenseAccount: string | null;
	TaxLiable: BoYesNoEnum | null;
	FixedAmountRevenues: number | null;
	FixedAmountExpenses: number | null;
	OutputVATGroup: string | null;
	InputVATGroup: string | null;
	DistributionMethod: BoAeDistMthd | null;
	Includein1099: BoYesNoEnum | null;
	FreightOffsetAccount: string | null;
	WTLiable: string | null;
	ExpensCode: number;
	ExpenseExemptedAccount: string | null;
	RevenuesExemptedAccount: string | null;
	DistributionRule: string | null;
	DrawingMethod: DrawingMethodEnum | null;
	FreightType: FreightTypeEnum | null;
	Stock: BoYesNoEnum | null;
	LastPurchasePrice: BoYesNoEnum | null;
	Project: string | null;
	DistributionRule2: string | null;
	DistributionRule3: string | null;
	DistributionRule4: string | null;
	DistributionRule5: string | null;
	DataVersion: number | null;
	SAFTProductType: SAFTProductTypeEnum | null;
	SAFTProductTypeEx: string | null;
}
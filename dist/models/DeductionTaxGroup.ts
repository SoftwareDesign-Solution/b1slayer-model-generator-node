import type { BoDeductionTaxGroupCodeEnum } from "./BoDeductionTaxGroupCodeEnum";

export type DeductionTaxGroup = {
	GroupKey: number;
	GroupCode: BoDeductionTaxGroupCodeEnum | null;
	GroupName: string | null;
	MaxRedin: number | null;
	GroupExtendedCode: string | null;
}
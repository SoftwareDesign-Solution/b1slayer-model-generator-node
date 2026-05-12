import type { TaxCodeDeterminationTCDByUsageTypeEnum } from "./TaxCodeDeterminationTCDByUsageTypeEnum";

export type TaxCodeDeterminationTCDByUsage = {
	AbsId: number | null;
	UsageCode: number | null;
	TaxCode: string | null;
	ExpTaxCode: string | null;
	Type: TaxCodeDeterminationTCDByUsageTypeEnum | null;
	PurTaxCode: string | null;
}
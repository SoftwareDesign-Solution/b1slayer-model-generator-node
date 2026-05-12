import type { TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage } from "./TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage";

export type TaxCodeDeterminationTCDKeyFieldValuePeriod = {
	AbsId: number | null;
	EfctFrom: Date | null;
	EfctTo: Date | null;
	TaxCode: string | null;
	TaxCodeDeterminationTCDKeyFieldValuePeriodByUsages: TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage[] | null;
}
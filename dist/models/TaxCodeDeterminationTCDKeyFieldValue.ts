import type { TaxCodeDeterminationTCDKeyFieldValuePeriod } from "./TaxCodeDeterminationTCDKeyFieldValuePeriod";
import type { TaxCodeDeterminationTCDKeyFieldValueDefaultWT } from "./TaxCodeDeterminationTCDKeyFieldValueDefaultWT";

export type TaxCodeDeterminationTCDKeyFieldValue = {
	AbsId: number | null;
	DispOrder: number | null;
	KeyFld_1_V: string | null;
	KeyFld_2_V: string | null;
	KeyFld_3_V: string | null;
	KeyFld_4_V: string | null;
	KeyFld_5_V: string | null;
	TaxCodeDeterminationTCDKeyFieldValuePeriods: TaxCodeDeterminationTCDKeyFieldValuePeriod[] | null;
	TaxCodeDeterminationTCDKeyFieldValueDefaultWTs: TaxCodeDeterminationTCDKeyFieldValueDefaultWT[] | null;
}
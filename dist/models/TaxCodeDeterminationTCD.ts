import type { TaxCodeDeterminationTCDTypeEnum } from "./TaxCodeDeterminationTCDTypeEnum";
import type { TaxCodeDeterminationTCDDefaultWT } from "./TaxCodeDeterminationTCDDefaultWT";
import type { TaxCodeDeterminationTCDByUsage } from "./TaxCodeDeterminationTCDByUsage";
import type { TaxCodeDeterminationTCDKeyField } from "./TaxCodeDeterminationTCDKeyField";

export type TaxCodeDeterminationTCD = {
	AbsId: number;
	TcdType: TaxCodeDeterminationTCDTypeEnum | null;
	DftArCode: string | null;
	DftApCode: string | null;
	TaxCodeDeterminationTCDDefaultWTs: TaxCodeDeterminationTCDDefaultWT[] | null;
	TaxCodeDeterminationTCDByUsages: TaxCodeDeterminationTCDByUsage[] | null;
	TaxCodeDeterminationTCDKeyFields: TaxCodeDeterminationTCDKeyField[] | null;
}
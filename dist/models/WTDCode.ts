import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { WithholdingTaxCodeCategoryEnum } from "./WithholdingTaxCodeCategoryEnum";
import type { WithholdingTaxCodeBaseTypeEnum } from "./WithholdingTaxCodeBaseTypeEnum";
import type { WTDEffectiveDate } from "./WTDEffectiveDate";
import type { WTDBP } from "./WTDBP";
import type { WTDItem } from "./WTDItem";
import type { WTDFreight } from "./WTDFreight";

export type WTDCode = {
	AbsEntry: number;
	WTaxCode: string | null;
	WTaxName: string | null;
	FormulaID: number | null;
	Inactive: BoYesNoEnum | null;
	OfficialCode: string | null;
	Category: WithholdingTaxCodeCategoryEnum | null;
	BaseType: WithholdingTaxCodeBaseTypeEnum | null;
	Type: number | null;
	MinAmount: number | null;
	BaseAmountPrct: number | null;
	SlidingScaleProgressiveTax: BoYesNoEnum | null;
	CalculateInAutomaticCM: BoYesNoEnum | null;
	WTDEffectiveDateCollection: WTDEffectiveDate[] | null;
	WTDBPCollection: WTDBP[] | null;
	WTDItemCollection: WTDItem[] | null;
	WTDFreightCollection: WTDFreight[] | null;
}
import type { LegalDataLineTypeEnum } from "./LegalDataLineTypeEnum";

export type LegalDataDetail = {
	DocEntry: number | null;
	LineSequence: number | null;
	LineType: LegalDataLineTypeEnum | null;
	TaxCode: string | null;
	TaxRate: number | null;
	Amount: number | null;
}
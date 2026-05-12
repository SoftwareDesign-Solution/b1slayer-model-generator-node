import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { BoTaxPostingAccountTypeEnum } from "./BoTaxPostingAccountTypeEnum";

export type PostingTemplatesLine = {
	TrtCode: string | null;
	LineNumber: number | null;
	ControlAccount: string | null;
	AccountCode: string | null;
	AccountName: string | null;
	Debit: number | null;
	Credit: number | null;
	TaxGroup: string | null;
	VatLine: BoYesNoEnum | null;
	TaxPostingAccount: BoTaxPostingAccountTypeEnum | null;
	TaxCode: string | null;
	DistributionRule: string | null;
	CostingCode1: string | null;
	CostingCode2: string | null;
	CostingCode3: string | null;
	CostingCode4: string | null;
	CostingCode5: string | null;
	WTaxLiable: BoYesNoEnum | null;
	WTaxLine: BoYesNoEnum | null;
	ProjectCode: string | null;
	CostElementCode: string | null;
}
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { DomesticBankAccountValidationEnum } from "./DomesticBankAccountValidationEnum";

export type Country = {
	Code: string;
	Name: string | null;
	CodeForReports: string | null;
	AddressFormat: number | null;
	EU: BoYesNoEnum | null;
	NumberOfDigitsForTaxID: number | null;
	BankCodeDigits: number | null;
	BankBranchDigits: number | null;
	BankAccountDigits: number | null;
	BankControlKeyDigits: number | null;
	DomesticAccountValidation: DomesticBankAccountValidationEnum | null;
	IbanValidation: BoYesNoEnum | null;
	Blacklisted: BoYesNoEnum | null;
	UICCountryCode: string | null;
	EAEU: BoYesNoEnum | null;
	ISOAlpha2Code: string | null;
	ISOAlpha3Code: string | null;
	ISONumeric: string | null;
}
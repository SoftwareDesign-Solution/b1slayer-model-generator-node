import type { BoYesNoEnum } from "./BoYesNoEnum";

export type Bank = {
	BankCode: string | null;
	BankName: string | null;
	AccountforOutgoingChecks: string | null;
	BranchforOutgoingChecks: string | null;
	NextCheckNumber: number | null;
	SwiftNo: string | null;
	IBAN: string | null;
	CountryCode: string | null;
	PostOffice: BoYesNoEnum | null;
	AbsoluteEntry: number;
	DefaultBankAccountKey: number | null;
	DigitalPayments: BoYesNoEnum | null;
}
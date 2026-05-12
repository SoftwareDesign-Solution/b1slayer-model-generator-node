import type { BoYesNoEnum } from "./BoYesNoEnum";

export type PaymentCheck = {
	LineNum: number | null;
	DueDate: Date | null;
	CheckNumber: number | null;
	BankCode: string | null;
	Branch: string | null;
	AccounttNum: string | null;
	Details: string | null;
	Trnsfrable: BoYesNoEnum | null;
	CheckSum: number | null;
	Currency: string | null;
	CountryCode: string | null;
	CheckAbsEntry: number | null;
	CheckAccount: string | null;
	ManualCheck: BoYesNoEnum | null;
	FiscalID: string | null;
	OriginallyIssuedBy: string | null;
	Endorse: BoYesNoEnum | null;
	EndorsableCheckNo: number | null;
	ECheck: BoYesNoEnum | null;
	U_CKSDMSID: number | null;
	U_CKSDMSFILEID: number | null;
	U_CKSDMSPRINTGUID: string | null;
}
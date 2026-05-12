import type { SEPASequenceTypeEnum } from "./SEPASequenceTypeEnum";

export type BPBankAccount = {
	LogInstance: number | null;
	UserNo4: string | null;
	BPCode: string | null;
	County: string | null;
	State: string | null;
	UserNo2: string | null;
	IBAN: string | null;
	ZipCode: string | null;
	City: string | null;
	Block: string | null;
	Branch: string | null;
	Country: string | null;
	Street: string | null;
	ControlKey: string | null;
	UserNo3: string | null;
	BankCode: string | null;
	AccountNo: string | null;
	UserNo1: string | null;
	InternalKey: number | null;
	BuildingFloorRoom: string | null;
	BIK: string | null;
	AccountName: string | null;
	CorrespondentAccount: string | null;
	Phone: string | null;
	Fax: string | null;
	CustomerIdNumber: string | null;
	ISRBillerID: string | null;
	ISRType: number | null;
	BICSwiftCode: string | null;
	ABARoutingNumber: string | null;
	MandateID: string | null;
	SignatureDate: Date | null;
	MandateExpDate: Date | null;
	SEPASeqType: SEPASequenceTypeEnum | null;
	U_CKS_MICRTRANSIT: string | null;
}
import type { BoMsgRcpTypes } from "./BoMsgRcpTypes";
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type Recipient = {
	UserCode: string | null;
	UserType: BoMsgRcpTypes | null;
	NameTo: string | null;
	SendEmail: BoYesNoEnum | null;
	EmailAddress: string | null;
	SendSMS: BoYesNoEnum | null;
	CellularNumber: string | null;
	SendFax: BoYesNoEnum | null;
	FaxNumber: string | null;
	SendInternal: BoYesNoEnum | null;
}
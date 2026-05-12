import type { BoYesNoEnum } from "./BoYesNoEnum";

export type AlertManagementRecipient = {
	UserCode: number | null;
	SendEMail: BoYesNoEnum | null;
	SendSMS: BoYesNoEnum | null;
	SendFax: BoYesNoEnum | null;
	SendInternal: BoYesNoEnum | null;
}
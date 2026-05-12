import type { BoYesNoEnum } from "./BoYesNoEnum";

export type MessageHeader = {
	Code: number | null;
	Received: BoYesNoEnum | null;
	Read: BoYesNoEnum | null;
	ReceivedDate: Date | null;
	ReceivedTime: TimeOfDay | null;
	SentDate: Date | null;
	SentTime: TimeOfDay | null;
}
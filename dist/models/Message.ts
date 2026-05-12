import type { BoMsgPriorities } from "./BoMsgPriorities";
import type { MessageDataColumn } from "./MessageDataColumn";
import type { Recipient } from "./Recipient";

export type Message = {
	Code: number;
	User: number | null;
	Priority: BoMsgPriorities | null;
	Subject: string | null;
	Text: string | null;
	Attachment: number | null;
	MessageDataColumns: MessageDataColumn[] | null;
	RecipientCollection: Recipient[] | null;
}
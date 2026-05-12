import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { MessageDataLine } from "./MessageDataLine";

export type MessageDataColumn = {
	ColumnName: string | null;
	Link: BoYesNoEnum | null;
	MessageDataLines: MessageDataLine[] | null;
}
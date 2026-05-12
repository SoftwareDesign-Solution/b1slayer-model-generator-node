import type { CallMessageTypeEnum } from "./CallMessageTypeEnum";
import type { CallMessageStatusEnum } from "./CallMessageStatusEnum";
import type { CallMessageArgument } from "./CallMessageArgument";

export type CallMessage = {
	ID: number | null;
	Type: CallMessageTypeEnum | null;
	ErrorCode: string | null;
	MessageBody: string | null;
	Status: CallMessageStatusEnum | null;
	CreationDate: Date | null;
	CreationTime: number | null;
	CallMessageArguments: CallMessageArgument[] | null;
}
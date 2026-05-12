import type { ExternalCallStatusEnum } from "./ExternalCallStatusEnum";
import type { CallArgument } from "./CallArgument";
import type { CallMessage } from "./CallMessage";

export type ExternalCall = {
	ID: number | null;
	Category: number | null;
	Status: ExternalCallStatusEnum | null;
	CreationDate: Date | null;
	CreationTime: number | null;
	LastUpdateDate: Date | null;
	LastUpdateTime: number | null;
	LastUpdateUserCode: string | null;
	CallArguments: CallArgument[] | null;
	CallMessages: CallMessage[] | null;
}
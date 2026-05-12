import type { ElectronicDocProtocolCodeStrEnum } from "./ElectronicDocProtocolCodeStrEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type EDFProtocol = {
	Code: ElectronicDocProtocolCodeStrEnum;
	Description: string | null;
	IsActive: BoYesNoEnum | null;
}
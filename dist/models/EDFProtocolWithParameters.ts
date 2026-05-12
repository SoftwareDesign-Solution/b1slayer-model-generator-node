import type { ElectronicDocProtocolCodeStrEnum } from "./ElectronicDocProtocolCodeStrEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { EDFProtocolParameter } from "./EDFProtocolParameter";
import type { PWPExtendedProperties } from "./PWPExtendedProperties";

export type EDFProtocolWithParameters = {
	Code: ElectronicDocProtocolCodeStrEnum | null;
	Description: string | null;
	IsActive: BoYesNoEnum | null;
	EDFProtocolParametersCollection: EDFProtocolParameter[] | null;
	PWPExtendedProperties: PWPExtendedProperties | null;
}
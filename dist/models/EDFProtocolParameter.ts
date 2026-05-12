import type { ElectronicDocProtocolCodeStrEnum } from "./ElectronicDocProtocolCodeStrEnum";

export type EDFProtocolParameter = {
	Code: ElectronicDocProtocolCodeStrEnum | null;
	ParamName: string | null;
	ParamValue: string | null;
	ParameterID: number | null;
	BranchID: number | null;
	ParamParameters: string | null;
}
import type { VM_ThirdPartyValuesData } from "./VM_ThirdPartyValuesData";

export type VM_B1ValuesData = {
	AbsEntry: number;
	ObjectId: number | null;
	ObjectAbsEntry: string | null;
	VM_ThirdPartyValuesCollection: VM_ThirdPartyValuesData[] | null;
}
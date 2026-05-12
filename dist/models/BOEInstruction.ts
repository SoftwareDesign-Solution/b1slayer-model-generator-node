import type { BoYesNoEnum } from "./BoYesNoEnum";

export type BOEInstruction = {
	InstructionEntry: number;
	InstructionCode: string | null;
	InstructionDesc: string | null;
	IsCancelInstruction: BoYesNoEnum | null;
}
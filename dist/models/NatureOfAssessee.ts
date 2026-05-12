import type { AssesseeTypeEnum } from "./AssesseeTypeEnum";

export type NatureOfAssessee = {
	AbsEntry: number;
	Code: string | null;
	Description: string | null;
	AssesseeType: AssesseeTypeEnum | null;
}
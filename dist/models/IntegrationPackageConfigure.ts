import type { BoYesNoEnum } from "./BoYesNoEnum";

export type IntegrationPackageConfigure = {
	AbsEntry: number;
	Code: string | null;
	Name: string | null;
	IsEnable: BoYesNoEnum | null;
}
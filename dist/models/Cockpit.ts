import type { BoCockpitTypeEnum } from "./BoCockpitTypeEnum";

export type Cockpit = {
	AbsEntry: number;
	Code: number | null;
	Name: string | null;
	Description: string | null;
	UserSignature: number | null;
	Date: Date | null;
	Time: TimeOfDay | null;
	Manufacturer: string | null;
	Publisher: string | null;
	CockpitType: BoCockpitTypeEnum | null;
}
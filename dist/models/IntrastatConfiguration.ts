import type { IntrastatConfigurationEnum } from "./IntrastatConfigurationEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { IntrastatConfigurationTriangDealEnum } from "./IntrastatConfigurationTriangDealEnum";

export type IntrastatConfiguration = {
	AbsEntry: number;
	ConfType: IntrastatConfigurationEnum | null;
	Code: string | null;
	Descr: string | null;
	PrcstVal: number | null;
	SuppUnit: number | null;
	Export: BoYesNoEnum | null;
	Import: BoYesNoEnum | null;
	StatCode: string | null;
	DateFrom: Date | null;
	DateTo: Date | null;
	Country: string | null;
	ConfID: string | null;
	TriangDeal: IntrastatConfigurationTriangDealEnum | null;
}
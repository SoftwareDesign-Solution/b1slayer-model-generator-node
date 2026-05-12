import type { IntrastatConfigurationEnum } from "./IntrastatConfigurationEnum";

export type IntrastatConfigurationParams = {
	AbsEntry: number | null;
	ConfType: IntrastatConfigurationEnum | null;
	Code: string | null;
	StatCode: string | null;
	DateFrom: Date | null;
	DateTo: Date | null;
	Country: string | null;
}
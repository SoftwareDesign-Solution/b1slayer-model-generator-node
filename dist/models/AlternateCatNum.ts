import type { BoYesNoEnum } from "./BoYesNoEnum";

export type AlternateCatNum = {
	ItemCode: string;
	CardCode: string;
	Substitute: string;
	DisplayBPCatalogNumber: BoYesNoEnum | null;
	IsDefault: BoYesNoEnum | null;
	Description: string | null;
	U_GA_GPitemcode: string | null;
}
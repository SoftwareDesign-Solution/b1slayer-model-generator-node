import type { BoDocumentTypes } from "./BoDocumentTypes";
import type { BoServiceSupplyMethods } from "./BoServiceSupplyMethods";
import type { BoServicePaymentMethods } from "./BoServicePaymentMethods";
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type ItemIntrastatExtension = {
	ItemCode: string | null;
	CommodityCode: number | null;
	SupplementaryUnit: number | null;
	FactorOfSupplementaryUnit: number | null;
	ImportRegionState: number | null;
	ExportRegionState: number | null;
	ImportNatureOfTransaction: number | null;
	ExportNatureOfTransaction: number | null;
	ImportStatisticalProcedure: number | null;
	ExportStatisticalProcedure: number | null;
	CountryOfOrigin: string | null;
	ServiceCode: number | null;
	Type: BoDocumentTypes | null;
	ServiceSupplyMethod: BoServiceSupplyMethods | null;
	ServicePaymentMethod: BoServicePaymentMethods | null;
	ImportRegionCountry: string | null;
	ExportRegionCountry: string | null;
	UseWeightInCalculation: BoYesNoEnum | null;
	IntrastatRelevant: BoYesNoEnum | null;
	StatisticalCode: string | null;
}
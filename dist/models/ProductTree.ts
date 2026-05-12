import type { BoItemTreeTypes } from "./BoItemTreeTypes";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { ProductTreeLine } from "./ProductTreeLine";
import type { ProductTreeStage } from "./ProductTreeStage";

export type ProductTree = {
	TreeCode: string;
	TreeType: BoItemTreeTypes | null;
	Quantity: number | null;
	DistributionRule: string | null;
	Project: string | null;
	DistributionRule2: string | null;
	DistributionRule3: string | null;
	DistributionRule4: string | null;
	DistributionRule5: string | null;
	PriceList: number | null;
	Warehouse: string | null;
	PlanAvgProdSize: number | null;
	HideBOMComponentsInPrintout: BoYesNoEnum | null;
	ProductDescription: string | null;
	AttachmentEntry: number | null;
	U_CKSDMSID: number | null;
	U_CKSDMSFILEID: number | null;
	U_CKSDMSPRINTGUID: string | null;
	U_CKS_BarcodeID: string | null;
	ProductTreeLines: ProductTreeLine[] | null;
	ProductTreeStages: ProductTreeStage[] | null;
}
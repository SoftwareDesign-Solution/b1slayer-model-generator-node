import type { BoGSTRegnTypeEnum } from "./BoGSTRegnTypeEnum";

export type WarehouseLocation = {
	Code: number;
	Name: string | null;
	LSTVATNumber: string | null;
	CSTNumber: string | null;
	ExemptionNumber: string | null;
	TANNumber: string | null;
	ServiceTaxNumber: string | null;
	AssesseeType: string | null;
	CompanyType: string | null;
	NatureOfBusiness: string | null;
	TINNumber: string | null;
	RegistrationType: string | null;
	EccNumber: string | null;
	CERange: string | null;
	CEDivision: string | null;
	CECommissionerate: string | null;
	ManufacturerCode: string | null;
	Jurisdiction: string | null;
	Street: string | null;
	Block: string | null;
	ZipCode: string | null;
	City: string | null;
	County: string | null;
	Country: string | null;
	State: string | null;
	PANNumber: string | null;
	CERegisterNumber: string | null;
	BuildingFloorRoom: string | null;
	GSTIN: string | null;
	GstType: BoGSTRegnTypeEnum | null;
	GSTTDS: string | null;
	GSTISD: string | null;
}
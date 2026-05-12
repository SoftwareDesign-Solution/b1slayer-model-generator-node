import type { BoBusinessPartnerGroupTypes } from "./BoBusinessPartnerGroupTypes";

export type BusinessPartnerGroup = {
	Code: number;
	Name: string | null;
	Type: BoBusinessPartnerGroupTypes | null;
}
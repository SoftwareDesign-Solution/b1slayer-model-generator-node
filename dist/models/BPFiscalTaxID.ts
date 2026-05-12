import type { BoAddressType } from "./BoAddressType";
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type BPFiscalTaxID = {
	Address: string | null;
	CNAECode: number | null;
	TaxId0: string | null;
	TaxId1: string | null;
	TaxId2: string | null;
	TaxId3: string | null;
	TaxId4: string | null;
	TaxId5: string | null;
	TaxId6: string | null;
	TaxId7: string | null;
	TaxId8: string | null;
	TaxId9: string | null;
	TaxId10: string | null;
	TaxId11: string | null;
	BPCode: string | null;
	AddrType: BoAddressType | null;
	TaxId12: string | null;
	TaxId13: string | null;
	AToRetrNFe: BoYesNoEnum | null;
	TaxId14: string | null;
}
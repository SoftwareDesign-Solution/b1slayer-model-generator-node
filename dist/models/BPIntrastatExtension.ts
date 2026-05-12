import type { BoYesNoEnum } from "./BoYesNoEnum";

export type BPIntrastatExtension = {
	CardCode: string | null;
	TransportMode: number | null;
	Incoterms: number | null;
	NatureOfTransactions: number | null;
	StatisticalProcedure: number | null;
	CustomsProcedure: number | null;
	PortOfEntryOrExit: number | null;
	DomesticOrForeignID: string | null;
	IntrastatRelevant: BoYesNoEnum | null;
}
import type { BoSeriesGroupEnum } from "./BoSeriesGroupEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { BoSeriesTypeEnum } from "./BoSeriesTypeEnum";

export type Series = {
	Document: string | null;
	DocumentSubType: string | null;
	InitialNumber: number | null;
	LastNumber: number | null;
	NextNumber: number | null;
	Prefix: string | null;
	Suffix: string | null;
	Remarks: string | null;
	GroupCode: BoSeriesGroupEnum | null;
	Locked: BoYesNoEnum | null;
	PeriodIndicator: string | null;
	Name: string | null;
	SeriesProperty: number | null;
	IsDigitalSeries: BoYesNoEnum | null;
	DigitNumber: number | null;
	SeriesType: BoSeriesTypeEnum | null;
	IsManual: BoYesNoEnum | null;
	BPLID: number | null;
	ATDocumentType: string | null;
	IsElectronicCommEnabled: BoYesNoEnum | null;
	CostAccountOnly: BoYesNoEnum | null;
	InvoiceType: number | null;
	InvoiceTypeOfNegativeInvoice: number | null;
	PortugalSeriesAction: string | null;
	PortugalSeriesStatus: string | null;
	PortugalSeriesPhase: string | null;
}
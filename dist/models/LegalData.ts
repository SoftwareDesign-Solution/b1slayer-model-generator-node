import type { BoAPARDocumentTypes } from "./BoAPARDocumentTypes";
import type { LegalDataDetail } from "./LegalDataDetail";

export type LegalData = {
	DocEntry: number;
	SourceObjectType: BoAPARDocumentTypes | null;
	SourceObjectEntry: number | null;
	DateOfPrinting: Date | null;
	TimeOfPrinting: TimeOfDay | null;
	PrinterBrand: string | null;
	PrinterType: string | null;
	PrinterModel: string | null;
	PrinterFirmwareVersion: string | null;
	PrinterDllVersion: string | null;
	FiscalSeries: string | null;
	FiscalNumber: string | null;
	DocumentNumber: string | null;
	FiscalUserID: number | null;
	LegalDataDetailCollection: LegalDataDetail[] | null;
}
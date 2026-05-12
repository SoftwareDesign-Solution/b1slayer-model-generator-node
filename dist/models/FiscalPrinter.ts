import type { FiscalPrinterParams } from "./FiscalPrinterParams";

export type FiscalPrinter = {
	EquipmentNo: string;
	Model: string | null;
	ManufacturerSerialN: string | null;
	RegisterNo: number | null;
	FiscalDocumentModel: string | null;
	FiscalPrintersParams: FiscalPrinterParams[] | null;
}
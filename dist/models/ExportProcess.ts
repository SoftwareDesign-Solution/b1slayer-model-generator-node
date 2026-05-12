export type ExportProcess = {
	LineNumber: number | null;
	ExportationDocumentTypeCode: number | null;
	ExportationDeclarationNumber: number | null;
	ExportationDeclarationDate: Date | null;
	ExportationNatureCode: number | null;
	ExportationRegistryNumber: number | null;
	ExportationRegistryDate: Date | null;
	LadingBillNumber: string | null;
	LadingBillDate: Date | null;
	MerchandiseLeftCustomsDate: Date | null;
	LadingBillTypeCode: number | null;
	DrawbackSuspensionRegime: string | null;
	NatureOfExport: string | null;
	QuantityOfExportedItems: number | null;
	AdditionalItemSequentialNumber: number | null;
}
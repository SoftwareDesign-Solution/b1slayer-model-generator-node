import type { ElectronicDocGenTypeEnum } from "./ElectronicDocGenTypeEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { TransportationDocumentLineData } from "./TransportationDocumentLineData";
import type { ElectronicProtocol } from "./ElectronicProtocol";

export type TransportationDocumentData = {
	TranspDocNumber: number;
	NextNumber: number | null;
	PostDate: Date | null;
	ElDocGenType: ElectronicDocGenTypeEnum | null;
	ElDocExportFormat: number | null;
	TransportationNumber: string | null;
	ExpirationDate: Date | null;
	VehicleID: string | null;
	TrailerID: string | null;
	CarrierCode: string | null;
	IssueGate: number | null;
	AttachmentEntry: number | null;
	Canceled: BoYesNoEnum | null;
	Weight: number | null;
	WeightUnit: number | null;
	TransportedTotalLC: number | null;
	WarehouseCode: string | null;
	COTCode: string | null;
	TransportationDocumentLineDataCollection: TransportationDocumentLineData[] | null;
	ElectronicProtocols: ElectronicProtocol[] | null;
}
import type { EWBTransporter_Line } from "./EWBTransporter_Line";

export type EWBTransporter = {
	AbsEntry: number;
	TransporterCode: string | null;
	TransporterName: string | null;
	TransporterID: string | null;
	EWBTransporter_Lines: EWBTransporter_Line[] | null;
}
import type { ElectronicDocProtocolCodeStrEnum } from "./ElectronicDocProtocolCodeStrEnum";

export type ExportDetermination = {
	AbsEntry: number;
	Code: ElectronicDocProtocolCodeStrEnum | null;
	Priority: number | null;
	BusinessPartner: string | null;
	Country: string | null;
	Series: number | null;
	DocumentType: string | null;
	ExportFormat: number | null;
	PathFileName: string | null;
	DocumentSubType: string | null;
	VersionNumber: number | null;
}
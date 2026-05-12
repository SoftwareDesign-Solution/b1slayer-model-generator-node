import type { ElectronicDocProtocolCodeStrEnum } from "./ElectronicDocProtocolCodeStrEnum";

export type ExportDeterminationParams = {
	AbsEntry: number | null;
	Code: ElectronicDocProtocolCodeStrEnum | null;
	BusinessPartner: string | null;
	Country: string | null;
	Series: number | null;
	DocumentType: string | null;
	DocumentSubType: string | null;
}
export type NotaFiscalUsage = {
	ID: number;
	Usage: string | null;
	IncomingInStateCFOPCode: string | null;
	IncomingOutStateCFOPCode: string | null;
	IncomingImportCFOPCode: string | null;
	OutgoingInStateCFOPCode: string | null;
	OutgoingOutStateCFOPCode: string | null;
	OutgoingExportCFOPCode: string | null;
	Description: string | null;
}
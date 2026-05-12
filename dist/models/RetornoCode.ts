import type { BoBoeStatus } from "./BoBoeStatus";

export type RetornoCode = {
	AbsEntry: number;
	OccurenceCode: number | null;
	MovementCode: number | null;
	BoeStatus: BoBoeStatus | null;
	Description: string | null;
	Color: number | null;
	FileFormat: string | null;
	BankCode: string | null;
}
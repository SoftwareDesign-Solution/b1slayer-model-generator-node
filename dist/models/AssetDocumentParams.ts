import type { ClosingOptionEnum } from "./ClosingOptionEnum";

export type AssetDocumentParams = {
	DocEntry: number | null;
	CancellationOption: ClosingOptionEnum | null;
	CancellationDate: Date | null;
}
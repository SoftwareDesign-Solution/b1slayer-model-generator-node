import type { DocumentPackageItem } from "./DocumentPackageItem";

export type DocumentPackage = {
	Number: number | null;
	Type: string | null;
	TotalWeight: number | null;
	Units: number | null;
	U_GA_Nettogewicht: number | null;
	U_GA_Bruttogewicht: number | null;
	U_GA_TrackingNr: string | null;
	U_GA_TrackingURL: string | null;
	U_GA_Length: number | null;
	U_GA_Width: number | null;
	U_GA_Heigth: number | null;
	DocumentPackageItems: DocumentPackageItem[] | null;
}
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type DocumentInstallment = {
	DueDate: Date | null;
	Percentage: number | null;
	Total: number | null;
	LastDunningDate: Date | null;
	DunningLevel: number | null;
	TotalFC: number | null;
	InstallmentId: number | null;
	PaymentOrdered: BoYesNoEnum | null;
}
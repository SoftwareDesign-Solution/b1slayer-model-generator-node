import type { AlertManagementDocumentEnum } from "./AlertManagementDocumentEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type AlertManagementDocument = {
	Document: AlertManagementDocumentEnum | null;
	Active: BoYesNoEnum | null;
}
import type { AlertManagementTypeEnum } from "./AlertManagementTypeEnum";
import type { AlertManagementPriorityEnum } from "./AlertManagementPriorityEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { AlertManagementFrequencyType } from "./AlertManagementFrequencyType";
import type { AlertManagementRecipient } from "./AlertManagementRecipient";
import type { AlertManagementDocument } from "./AlertManagementDocument";

export type AlertManagement = {
	Code: number;
	Name: string | null;
	Type: AlertManagementTypeEnum | null;
	Priority: AlertManagementPriorityEnum | null;
	Active: BoYesNoEnum | null;
	Param: string | null;
	QueryID: number | null;
	FrequencyType: AlertManagementFrequencyType | null;
	DayOfExecution: number | null;
	ExecutionTime: TimeOfDay | null;
	LastExecutionDate: Date | null;
	LastExecutionTime: number | null;
	NextExecutionDate: Date | null;
	NextExecutionTime: TimeOfDay | null;
	SaveHistory: BoYesNoEnum | null;
	FrequencyInterval: number | null;
	AlertManagementRecipients: AlertManagementRecipient[] | null;
	AlertManagementDocuments: AlertManagementDocument[] | null;
}
import type { EcmActionTypeEnum } from "./EcmActionTypeEnum";
import type { EcmActionStatusEnum } from "./EcmActionStatusEnum";
import type { EcmActionPeriodTypeEnum } from "./EcmActionPeriodTypeEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { EcmActionGenerationTypeEnum } from "./EcmActionGenerationTypeEnum";

export type EcmAction = {
	ActionID: number | null;
	Protocol: string | null;
	Type: EcmActionTypeEnum | null;
	Description: string | null;
	Status: EcmActionStatusEnum | null;
	Message: string | null;
	Environment: number | null;
	BusinessPlace: number | null;
	Submits: number | null;
	ObjectID: string | null;
	ReportID: string | null;
	SourceType: string | null;
	SourceObject: number | null;
	AssignedID: string | null;
	DocumentBatch: string | null;
	DocumentBatchLine: number | null;
	PeriodType: EcmActionPeriodTypeEnum | null;
	PeriodNumber: number | null;
	PeriodYear: number | null;
	PeriodDateFrom: Date | null;
	PeriodDateTo: Date | null;
	IsRemoved: BoYesNoEnum | null;
	IsCanceled: BoYesNoEnum | null;
	GenerationType: EcmActionGenerationTypeEnum | null;
	GUID: string | null;
	U_B1SYS_XMLAmount: number | null;
	U_B1SYS_SendDateINTM: Date | null;
}
import type { VMCommunicationTypeEnum } from "./VMCommunicationTypeEnum";
import type { VMCommunicationStatusEnum } from "./VMCommunicationStatusEnum";

export type ValueMappingCommunicationData = {
	AbsEntry: number;
	ThirdPartySystemId: number | null;
	ObjectId: number | null;
	CommunicationType: VMCommunicationTypeEnum | null;
	StartDate: Date | null;
	StartTime: number | null;
	EndDate: Date | null;
	EndTime: number | null;
	Message: string | null;
	Status: VMCommunicationStatusEnum | null;
}
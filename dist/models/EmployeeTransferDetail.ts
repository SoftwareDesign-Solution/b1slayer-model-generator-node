import type { EmployeeTransferProcessingStatusEnum } from "./EmployeeTransferProcessingStatusEnum";

export type EmployeeTransferDetail = {
	TransferID: number | null;
	EmployeeID: number | null;
	TransferedDate: Date | null;
	TransferedTime: TimeOfDay | null;
	Status: EmployeeTransferProcessingStatusEnum | null;
	Comment: string | null;
}
import type { EmployeeTransferStatusEnum } from "./EmployeeTransferStatusEnum";
import type { EmployeeTransferDetail } from "./EmployeeTransferDetail";

export type EmployeeTransfer = {
	TransferID: number;
	TransStartDate: Date | null;
	TransStartTime: TimeOfDay | null;
	TransEndDate: Date | null;
	TransEndTime: TimeOfDay | null;
	Status: EmployeeTransferStatusEnum | null;
	Comment: string | null;
	EmployeeTransferDetails: EmployeeTransferDetail[] | null;
}
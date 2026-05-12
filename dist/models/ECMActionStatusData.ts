import type { EcmActionStatusEnum } from "./EcmActionStatusEnum";

export type ECMActionStatusData = {
	AbsEntry: number | null;
	ActStatus: EcmActionStatusEnum | null;
	ReportID: string | null;
	ReceivDate: Date | null;
	ActMessage: string | null;
}
export type KnowledgeBaseSolution = {
	ItemCode: string | null;
	Status: number | null;
	Owner: number | null;
	CreatedBy: number | null;
	CreationDate: Date | null;
	LastUpdatedBy: number | null;
	LastUpdateDate: Date | null;
	Solution: string | null;
	Symptom: string | null;
	Cause: string | null;
	Description: string | null;
	SolutionCode: number;
	AttachmentEntry: number | null;
	U_CKSDMSID: number | null;
	U_CKSDMSFILEID: number | null;
	U_CKSDMSPRINTGUID: string | null;
	U_CKS_BarcodeID: string | null;
}
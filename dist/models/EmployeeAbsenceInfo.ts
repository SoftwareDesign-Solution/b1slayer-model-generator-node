export type EmployeeAbsenceInfo = {
	EmployeeID: number | null;
	LineNum: number | null;
	FromDate: Date | null;
	ToDate: Date | null;
	Reason: string | null;
	ApprovedBy: string | null;
	ConfirmerNumber: number | null;
}
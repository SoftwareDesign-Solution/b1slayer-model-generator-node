import type { BoYesNoEnum } from "./BoYesNoEnum";

export type SalesPerson = {
	SalesEmployeeCode: number;
	SalesEmployeeName: string | null;
	Remarks: string | null;
	CommissionForSalesEmployee: number | null;
	CommissionGroup: number | null;
	Locked: BoYesNoEnum | null;
	EmployeeID: number | null;
	Active: BoYesNoEnum | null;
	Telephone: string | null;
	Mobile: string | null;
	Fax: string | null;
	Email: string | null;
}
import type { TargetGroupsDetailStatusEnum } from "./TargetGroupsDetailStatusEnum";

export type TargetGroupsDetail = {
	TargetGroupCode: string | null;
	BusinessPartnerCode: string | null;
	BusinessPartnerName: string | null;
	GroupCode: string | null;
	Industry: string | null;
	ActiveStatus: TargetGroupsDetailStatusEnum | null;
	ContactPerson: string | null;
	Title: string | null;
	Position: string | null;
	E_Mail: string | null;
	Telephone: string | null;
	MobilePhone: string | null;
	Fax: string | null;
	Address: string | null;
	Street: string | null;
	Block: string | null;
	City: string | null;
	ZipCode: string | null;
	County: string | null;
	State: string | null;
	Country: string | null;
	Building: string | null;
}
import type { MobileAppReportChoiceEnum } from "./MobileAppReportChoiceEnum";

export type ServiceAppReport = {
	Code: number | null;
	SystemReportName: string | null;
	CustomizedReportName: string | null;
	ReportChoice: MobileAppReportChoiceEnum | null;
}
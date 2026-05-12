import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { WebClientVariantSelectedColumn } from "./WebClientVariantSelectedColumn";
import type { WebClientVariantGroupBy } from "./WebClientVariantGroupBy";
import type { WebClientVariantSortBy } from "./WebClientVariantSortBy";
import type { WebClientVariantEmbeddedChart } from "./WebClientVariantEmbeddedChart";
import type { WebClientVariantMChart } from "./WebClientVariantMChart";

export type WebClientVariant = {
	Guid: string;
	Order: number | null;
	UserId: number | null;
	ViewType: string | null;
	SubViewType: string | null;
	ViewId: string | null;
	ObjectName: string | null;
	FilterBarLayout: string | null;
	SystemFilter: string | null;
	UserFilter: string | null;
	ConditionFilter: string | null;
	IsPublic: BoYesNoEnum | null;
	IsSystem: BoYesNoEnum | null;
	Name: string | null;
	Version: number | null;
	OverviewCustomization: string | null;
	ChartCustomization: string | null;
	WebClientVariantSelectedColumnCollection: WebClientVariantSelectedColumn[] | null;
	WebClientVariantGroupByCollection: WebClientVariantGroupBy[] | null;
	WebClientVariantSortByCollection: WebClientVariantSortBy[] | null;
	WebClientVariantEmbeddedChartCollection: WebClientVariantEmbeddedChart[] | null;
	WebClientVariantMChartCollection: WebClientVariantMChart[] | null;
}
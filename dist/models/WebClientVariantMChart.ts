import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { WebClientVariantMChartValue1 } from "./WebClientVariantMChartValue1";
import type { WebClientVariantMChartValue2 } from "./WebClientVariantMChartValue2";
import type { WebClientVariantMChartSize } from "./WebClientVariantMChartSize";

export type WebClientVariantMChart = {
	Guid: string | null;
	ChartType: string | null;
	IsShowLegend: BoYesNoEnum | null;
	CategoryAxis1: string | null;
	CategoryAxis2: string | null;
	TimeAxis: string | null;
	Color: string | null;
	Shape: string | null;
	BubbleWidth: string | null;
	WebClientVariantMChartValue1Collection: WebClientVariantMChartValue1[] | null;
	WebClientVariantMChartValue2Collection: WebClientVariantMChartValue2[] | null;
	WebClientVariantMChartSizeCollection: WebClientVariantMChartSize[] | null;
}
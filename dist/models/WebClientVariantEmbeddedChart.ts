import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { WebClientVariantEmbeddedChartValue1 } from "./WebClientVariantEmbeddedChartValue1";
import type { WebClientVariantEmbeddedChartValue2 } from "./WebClientVariantEmbeddedChartValue2";
import type { WebClientVariantEmbeddedChartSize } from "./WebClientVariantEmbeddedChartSize";

export type WebClientVariantEmbeddedChart = {
	Guid: string | null;
	ChartType: string | null;
	IsShowLegend: BoYesNoEnum | null;
	CategoryAxis1: string | null;
	CategoryAxis2: string | null;
	TimeAxis: string | null;
	Color: string | null;
	Shape: string | null;
	BubbleWidth: string | null;
	WebClientVariantEmbeddedChartValue1Collection: WebClientVariantEmbeddedChartValue1[] | null;
	WebClientVariantEmbeddedChartValue2Collection: WebClientVariantEmbeddedChartValue2[] | null;
	WebClientVariantEmbeddedChartSizeCollection: WebClientVariantEmbeddedChartSize[] | null;
}
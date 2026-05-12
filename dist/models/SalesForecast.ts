import type { BoForecastViewType } from "./BoForecastViewType";
import type { SalesForecastLine } from "./SalesForecastLine";

export type SalesForecast = {
	ForecastStartDate: Date | null;
	ForecastEndDate: Date | null;
	ForecastCode: string | null;
	ForecastName: string | null;
	Numerator: number;
	View: BoForecastViewType | null;
	SalesForecastLines: SalesForecastLine[] | null;
}
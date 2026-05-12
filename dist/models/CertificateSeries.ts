import type { SeriesLine } from "./SeriesLine";

export type CertificateSeries = {
	AbsEntry: number;
	Code: string | null;
	Section: number | null;
	Location: number | null;
	DefaultSeries: number | null;
	SeriesLines: SeriesLine[] | null;
}
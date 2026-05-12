export type CheckInParams = {
	LineNumber: number | null;
	Date: Date | null;
	Time: TimeOfDay | null;
	Location: string | null;
	Latitude: string | null;
	Longitude: string | null;
	HandledBy: number | null;
	HandledByEmployee: number | null;
}
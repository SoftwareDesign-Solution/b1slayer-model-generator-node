export type ChangeLogDifferenceParams = {
	Date: Date | null;
	ChangedField: string | null;
	OldValue: string | null;
	NewValue: string | null;
	UserName: string | null;
	ArrayOffset: number | null;
	LineNumber: string | null;
}
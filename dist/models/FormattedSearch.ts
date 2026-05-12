import type { BoFormattedSearchActionEnum } from "./BoFormattedSearchActionEnum";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { FormattedSearchByFieldEnum } from "./FormattedSearchByFieldEnum";
import type { UserValidValue } from "./UserValidValue";
import type { FieldID } from "./FieldID";

export type FormattedSearch = {
	FormID: string | null;
	ItemID: string | null;
	ColumnID: string | null;
	Action: BoFormattedSearchActionEnum | null;
	QueryID: number | null;
	Index: number;
	Refresh: BoYesNoEnum | null;
	FieldID: string | null;
	ForceRefresh: BoYesNoEnum | null;
	ByField: BoYesNoEnum | null;
	ByFieldEx: FormattedSearchByFieldEnum | null;
	UserValidValues: UserValidValue[] | null;
	FieldIDs: FieldID[] | null;
}
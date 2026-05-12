import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { UserKeysMD_Element } from "./UserKeysMD_Element";

export type UserKeysMD = {
	TableName: string;
	KeyIndex: number;
	KeyName: string | null;
	Unique: BoYesNoEnum | null;
	UserKeysMD_Elements: UserKeysMD_Element[] | null;
}
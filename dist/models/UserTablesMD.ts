import type { BoUTBTableType } from "./BoUTBTableType";
import type { BoYesNoEnum } from "./BoYesNoEnum";

export type UserTablesMD = {
	TableName: string;
	TableDescription: string | null;
	TableType: BoUTBTableType | null;
	Archivable: BoYesNoEnum | null;
	ArchiveDateField: string | null;
	DisplayMenu: BoYesNoEnum | null;
	ApplyAuthorization: BoYesNoEnum | null;
}
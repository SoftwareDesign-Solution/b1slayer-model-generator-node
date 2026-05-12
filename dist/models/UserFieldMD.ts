import type { BoFieldTypes } from "./BoFieldTypes";
import type { BoFldSubTypes } from "./BoFldSubTypes";
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { UDFLinkedSystemObjectTypesEnum } from "./UDFLinkedSystemObjectTypesEnum";
import type { ValidValueMD } from "./ValidValueMD";

export type UserFieldMD = {
	Name: string | null;
	Type: BoFieldTypes | null;
	Size: number | null;
	Description: string | null;
	SubType: BoFldSubTypes | null;
	LinkedTable: string | null;
	DefaultValue: string | null;
	TableName: string;
	FieldID: number;
	EditSize: number | null;
	Mandatory: BoYesNoEnum | null;
	LinkedUDO: string | null;
	LinkedSystemObject: UDFLinkedSystemObjectTypesEnum | null;
	ValidValuesMD: ValidValueMD[] | null;
}
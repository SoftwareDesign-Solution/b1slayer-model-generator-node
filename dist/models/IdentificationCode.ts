import type { IdentificationCodeTypeEnum } from "./IdentificationCodeTypeEnum";

export type IdentificationCode = {
	AbsEntry: number;
	Codelist: IdentificationCodeTypeEnum | null;
	Code: string | null;
	Description: string | null;
	SchemaCode: string | null;
	SchemaDesc: string | null;
}
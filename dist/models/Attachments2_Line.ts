import type { BoYesNoEnum } from "./BoYesNoEnum";

export type Attachments2_Line = {
	AbsoluteEntry: number | null;
	LineNum: number | null;
	SourcePath: string | null;
	FileName: string | null;
	FileExtension: string | null;
	AttachmentDate: Date | null;
	UserID: BoYesNoEnum | null;
	Override: BoYesNoEnum | null;
	FreeText: string | null;
	CopyToTargetDoc: BoYesNoEnum | null;
	CopyToProductionOrder: BoYesNoEnum | null;
	EDocSign: BoYesNoEnum | null;
	TargetPath: string | null;
	SubPath: string | null;
	U_CKS_ARCHIVE: number | null;
	U_CKS_MICRTRANSIT: string | null;
}
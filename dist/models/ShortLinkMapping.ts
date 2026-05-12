export type ShortLinkMapping = {
	Guid: string;
	Origin: string | null;
	SrcLink: string | null;
	OwnerCode: string | null;
	CreateDate: Date | null;
	CreateTime: TimeOfDay | null;
}
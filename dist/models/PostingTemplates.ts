import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { PostingTemplatesLine } from "./PostingTemplatesLine";

export type PostingTemplates = {
	Code: string;
	Description: string | null;
	StampTax: BoYesNoEnum | null;
	AutomaticVAT: BoYesNoEnum | null;
	ManageWTax: BoYesNoEnum | null;
	DeferredTax: BoYesNoEnum | null;
	PostingTemplatesLineCollection: PostingTemplatesLine[] | null;
}
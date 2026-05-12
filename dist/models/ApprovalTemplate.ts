import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { ApprovalTemplateUser } from "./ApprovalTemplateUser";
import type { ApprovalTemplateStage } from "./ApprovalTemplateStage";
import type { ApprovalTemplateDocument } from "./ApprovalTemplateDocument";
import type { ApprovalTemplateTerm } from "./ApprovalTemplateTerm";
import type { ApprovalTemplateQuery } from "./ApprovalTemplateQuery";

export type ApprovalTemplate = {
	Code: number;
	Name: string | null;
	Remarks: string | null;
	UseTerms: BoYesNoEnum | null;
	IsActive: BoYesNoEnum | null;
	IsActiveWhenUpdatingDocuments: BoYesNoEnum | null;
	ApprovalTemplateUsers: ApprovalTemplateUser[] | null;
	ApprovalTemplateStages: ApprovalTemplateStage[] | null;
	ApprovalTemplateDocuments: ApprovalTemplateDocument[] | null;
	ApprovalTemplateTerms: ApprovalTemplateTerm[] | null;
	ApprovalTemplateQueries: ApprovalTemplateQuery[] | null;
}
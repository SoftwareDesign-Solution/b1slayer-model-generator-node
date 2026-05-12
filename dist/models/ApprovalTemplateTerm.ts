import type { ApprovalTemplateConditionTypeEnum } from "./ApprovalTemplateConditionTypeEnum";
import type { ApprovalTemplateOperationTypeEnum } from "./ApprovalTemplateOperationTypeEnum";

export type ApprovalTemplateTerm = {
	ConditionType: ApprovalTemplateConditionTypeEnum | null;
	OperationType: ApprovalTemplateOperationTypeEnum | null;
	Value: string | null;
}
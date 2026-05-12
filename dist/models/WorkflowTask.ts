import type { WorkflowTaskInputObject } from "./WorkflowTaskInputObject";
import type { WorkflowTaskNote } from "./WorkflowTaskNote";
import type { WorkflowTaskOutputObject } from "./WorkflowTaskOutputObject";

export type WorkflowTask = {
	InstanceID: number | null;
	TaskID: number | null;
	TemplateID: string | null;
	TemplateName: string | null;
	Description: string | null;
	Operation: string | null;
	Type: string | null;
	Owner: string | null;
	Priority: number | null;
	Status: string | null;
	Name: string | null;
	WorkflowTaskInputObjectCollection: WorkflowTaskInputObject[] | null;
	WorkflowTaskNoteCollection: WorkflowTaskNote[] | null;
	WorkflowTaskOutputObjectCollection: WorkflowTaskOutputObject[] | null;
}
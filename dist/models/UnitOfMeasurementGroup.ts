import type { UoMGroupDefinition } from "./UoMGroupDefinition";

export type UnitOfMeasurementGroup = {
	AbsEntry: number;
	Code: string | null;
	Name: string | null;
	BaseUoM: number | null;
	UoMGroupDefinitionCollection: UoMGroupDefinition[] | null;
}
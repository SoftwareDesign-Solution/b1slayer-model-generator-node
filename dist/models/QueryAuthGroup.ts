import type { CategoryGroup } from "./CategoryGroup";

export type QueryAuthGroup = {
	AuthGroupCode: string | null;
	AuthGroupDes: string | null;
	AuthGroupId: number;
	CategoryGroupCollection: CategoryGroup[] | null;
}
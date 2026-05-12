import type { UserGroupCategoryEnum } from "./UserGroupCategoryEnum";

export type UserGroup = {
	UserGroupId: number;
	UserGroupName: string | null;
	UserGroupDec: string | null;
	TPLId: number | null;
	StartDate: Date | null;
	DueDate: Date | null;
	UserGroupType: UserGroupCategoryEnum | null;
}
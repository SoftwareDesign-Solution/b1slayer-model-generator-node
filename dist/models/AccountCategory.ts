import type { AccountCategorySourceEnum } from "./AccountCategorySourceEnum";

export type AccountCategory = {
	CategoryCode: number;
	CategoryName: string | null;
	CategorySource: AccountCategorySourceEnum | null;
}
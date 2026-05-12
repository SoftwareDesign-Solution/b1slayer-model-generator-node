import type { InventoryPostingCopyOptionEnum } from "./InventoryPostingCopyOptionEnum";

export type InventoryPostingCopyOption = {
	BaseEntry: number | null;
	CopyOption: InventoryPostingCopyOptionEnum | null;
}
import type { BoBpAccountTypes } from "./BoBpAccountTypes";

export type BPAccountReceivablePayble = {
	AccountType: BoBpAccountTypes | null;
	AccountCode: string | null;
	BPCode: string | null;
}
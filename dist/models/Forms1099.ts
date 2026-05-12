import type { Boxes1099Item } from "./Boxes1099Item";

export type Forms1099 = {
	FormCode: number;
	Form1099: string | null;
	Boxes1099: Boxes1099Item[] | null;
}
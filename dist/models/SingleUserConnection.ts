import type { SingleUserConnectionActionEnum } from "./SingleUserConnectionActionEnum";

export type SingleUserConnection = {
	Code: number;
	Action: SingleUserConnectionActionEnum | null;
}
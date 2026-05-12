import type { BoAllocationByEnum } from "./BoAllocationByEnum";

export type LandedCostsCode = {
	Code: string;
	Name: string | null;
	AllocationBy: BoAllocationByEnum | null;
	LandedCostsAllocationAccount: string | null;
}
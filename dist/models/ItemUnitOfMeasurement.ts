import type { ItemUoMTypeEnum } from "./ItemUoMTypeEnum";
import type { ItemUoMPackage } from "./ItemUoMPackage";

export type ItemUnitOfMeasurement = {
	UoMType: ItemUoMTypeEnum | null;
	UoMEntry: number | null;
	DefaultBarcode: number | null;
	DefaultPackage: number | null;
	Length1: number | null;
	Length1Unit: number | null;
	Length2: number | null;
	Length2Unit: number | null;
	Width1: number | null;
	Width1Unit: number | null;
	Width2: number | null;
	Width2Unit: number | null;
	Height1: number | null;
	Height1Unit: number | null;
	Height2: number | null;
	Height2Unit: number | null;
	Volume: number | null;
	VolumeUnit: number | null;
	Weight1: number | null;
	Weight1Unit: number | null;
	Weight2: number | null;
	Weight2Unit: number | null;
	ItemUoMPackageCollection: ItemUoMPackage[] | null;
}
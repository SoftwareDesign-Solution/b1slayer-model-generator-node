import type { BoYesNoEnum } from "./BoYesNoEnum";

export type DashboardPackageImportParams = {
	PackageFilePath: string | null;
	ImportQueries: BoYesNoEnum | null;
	ForceOverwriteQuery: BoYesNoEnum | null;
	ForceOverwritePackage: BoYesNoEnum | null;
}
import type { BoYesNoEnum } from "./BoYesNoEnum";
import type { GovPayCodePeriodicityEnum } from "./GovPayCodePeriodicityEnum";
import type { GovPayCodeAuthority } from "./GovPayCodeAuthority";

export type GovPayCode = {
	AbsId: number;
	Code: string | null;
	Descr: string | null;
	StateTax: BoYesNoEnum | null;
	Prdcity: GovPayCodePeriodicityEnum | null;
	GovPayCodeAuthorities: GovPayCodeAuthority[] | null;
}
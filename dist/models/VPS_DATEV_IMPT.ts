export type VPS_DATEV_IMPT = {
	DocEntry: number | null;
	LineId: number | null;
	VisOrder: number | null;
	Object: string | null;
	LogInst: number | null;
	U_SOLLHABEN: string;
	U_SALDO: number;
	U_WKZ: string;
	U_KURS: number | null;
	U_FWBASIS: number | null;
	U_KONTO: string;
	U_GKONTO: string;
	U_BU: string | null;
	U_BUCHDAT: Date;
	U_BELEG1: string | null;
	U_BELEG2: string | null;
	U_BUCHTEXT: string | null;
	U_GUID: string | null;
	U_RESULT: string | null;
	U_RESDESC: string | null;
	U_TRANSID: string | null;
}
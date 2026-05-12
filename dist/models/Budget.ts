import type { BudgetLine } from "./BudgetLine";
import type { BudgetCostAccountingLine } from "./BudgetCostAccountingLine";

export type Budget = {
	FutureAnnualExpensesCreditSys: number | null;
	FutureAnnualExpensesCreditLoc: number | null;
	FutureAnnualExpensesDebitSys: number | null;
	FutureAnnualExpensesDebitLoc: number | null;
	FutureAnnualRevenuesCredit: number | null;
	FutureAnnualRevenuesDebit: number | null;
	FutureRevenuesDebitSys: number | null;
	FutureRevenuesDebitLoc: number | null;
	ParentAccPercent: number | null;
	StartofFiscalYear: Date | null;
	ParentAccountKey: string | null;
	TotalAnnualBudgetDebitSys: number | null;
	BudgetBalanceDebitSys: number | null;
	BudgetBalanceDebitLoc: number | null;
	TotalAnnualBudgetDebitLoc: number | null;
	TotalAnnualBudgetCreditSys: number | null;
	TotalAnnualBudgetCreditLoc: number | null;
	BudgetBalanceCreditSys: number | null;
	BudgetBalanceCreditLoc: number | null;
	DivisionCode: number | null;
	AccountCode: string | null;
	Numerator: number;
	BudgetScenario: number | null;
	BudgetLines: BudgetLine[] | null;
	BudgetCostAccountingLines: BudgetCostAccountingLine[] | null;
}
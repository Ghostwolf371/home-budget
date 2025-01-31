import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {BudgetCategory} from "../../interfaces/models/budget-category.interface";
import {Budget} from "../../interfaces/models/budget.interface";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  public BUDGETS: string = 'BUDGETS';
  public BUDGET_CATEGORIES: string = 'BUDGET_CATEGORIES';

  public budgetSubject: Subject<Budget[]> = new Subject();
  public budgetCategorySubject: Subject<BudgetCategory[]> = new Subject();

  constructor() {
  }

  addBudget(budget: Budget) {
    const budgets = this.getBudgets();
    budgets.push(budget);
    this.setBudgets(budgets);
  }

  getBudgets(): Budget[] {
    return JSON.parse(localStorage.getItem(this.BUDGETS) || '[]') as Budget[]
  }

  updateBudgetAmount(budgetId: string, spent: number) {
    const budgets = this.getBudgets();
    const index = budgets.findIndex(x => x.id === budgetId);
    if (index > -1) {
      budgets[index].spent = spent;
      this.setBudgets(budgets);
      return;
    }
    throw Error('can not update for a budget that does not exist')
  }

  getBudgetCategories(): BudgetCategory[] {
    return JSON.parse(localStorage.getItem(this.BUDGET_CATEGORIES) || '[]') as BudgetCategory[]
  }

  getBudgetById(budgetId: string) {
    const budgets = this.getBudgets();
    const index = budgets.findIndex(x => x.id === budgetId)
    if (index > -1) {
      return budgets[index]
    }
    throw Error('Budget not found');
  }

  getBudgetCategoryById(id: string) {
    const categories = this.getBudgetCategories();
    const index = categories.findIndex(x => x.id === id)
    if (index > -1) {
      return categories[index]
    }
    throw Error('Category does not exist');
  }

  getBudgetData(): Observable<Budget[]> {
    return this.budgetSubject.asObservable();
  }

  getBudgetCategoryData(): Observable<BudgetCategory[]> {
    return this.budgetCategorySubject.asObservable();
  }

  deleteBudgetById(id: string) {
    const budgets = this.getBudgets();
    const filtered = budgets.filter(item => item.id != id)
    this.setBudgets(filtered);
  }

  setBudgets(budgets: Budget[]) {
    localStorage.setItem(this.BUDGETS, JSON.stringify(budgets));

    const budgetCategories: BudgetCategory[] = budgets.map((item: Budget) => {
      return {
        color: item.color,
        id: item.id,
        name: item.name
      } as BudgetCategory
    })
    this.setBudgetCategories(budgetCategories);
    this.budgetSubject.next(budgets);
  }

  private setBudgetCategories(budgetCategories: BudgetCategory[]) {
    localStorage.setItem(this.BUDGET_CATEGORIES, JSON.stringify(budgetCategories));
    this.budgetCategorySubject.next(budgetCategories);
  }
}

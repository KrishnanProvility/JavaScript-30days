
localStorage.clear();
const personAccount = {
  firstname: "John",
  lastname: "Doe",
  incomes: new Map(),
  expenses: new Map(),

  totalIncome() {
    return this.incomes.values().reduce((sum, value) => sum + value, 0);
  },

  totalExpense() {
    return Array.from(this.expenses.values()).reduce((sum, value) => sum + value, 0);
  },

  accountInfo() {
    return `Account holder: ${this.firstname} ${this.lastname}\nTotal Income: ${this.totalIncome()}\nTotal Expenses: ${this.totalExpense()}\nAccount Balance: ${this.accountBalance()}`;
  },

  addIncome(description, amount) {
    const currentAmount = this.incomes.get(description) || 0;
    this.incomes.set(description, currentAmount + amount);
  },

  addExpense(description, amount) {
    const currentAmount = this.expenses.get(description) || 0;
    this.expenses.set(description, currentAmount + amount);
  },

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
};

personAccount.addIncome("Salary", 5000);
personAccount.addIncome("Freelancing", 1200);
personAccount.addExpense("Rent", 1500);
personAccount.addExpense("Groceries", 300);


const accountData = {
  firstname: personAccount.firstname,
  lastname: personAccount.lastname,
  incomes: Array.from(personAccount.incomes.entries()),
  expenses: Array.from(personAccount.expenses.entries())
};

const PAJSON = JSON.stringify(accountData, undefined, 4);
localStorage.setItem("account", PAJSON);

console.log(localStorage);


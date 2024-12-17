const personAccount ={
    firstName : "krishnan",
    lastName :"elumalai",
    incomes :[],
    expenses :[],
    totalIncome:function(){
        let total=0;
        for(let income of this.incomes)
            {
            total +=income.amount;
            }
            return total
        },
    addIncome(description, amount) {
            this.incomes.push({ description, amount });
        },
    addExpense(description,amount){
        this.expenses.push({description:description,amount:amount})
    } ,
    totalExpenses:function(){
        let total = 0;
        for(let expence of this.expenses){
            total+=expence.amount
        }
        return total;
    },
    acountBalance:() => {
        let bal = personAccount.totalIncome() - personAccount.totalExpenses();
        return bal;
    },
    acountInfo :function()  {
        return `My name is ${this.firstName} ${this.lastName}.\n My total incomes amount :${this.totalIncome()}.\n My total Expenses: ${this.totalExpenses()}.\n my currentbalance :${this.acountBalance()}`
    }
    
}

personAccount.addIncome("sal",500);
personAccount.addExpense("snacks",30);
console.log(personAccount.acountInfo());
console.log(personAccount.totalIncome());




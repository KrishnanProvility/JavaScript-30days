    const personAccount ={
        firstName : "krishnan",
        lastName :"elumalai",
        incomes :[],
        expenses :[],
        totalIncome:function(){
            total=0;
            for(let income of this.incomes)
                {
                total +=income.amount;
                }
                return total
            },
            addIncome(description, amount) {
                this.incomes.push({ description, amount });
            },
        
    }

    personAccount.addIncome("snacks",500)

    console.log(personAccount.incomes[{description}])

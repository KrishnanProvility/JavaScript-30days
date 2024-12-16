function factorial(n) { 
    let num = 1; 
    
    if(n === 0)
        return 1;
    for (let i = 1; i <= n; i++) 
    {
        num = num * i; 
    }
    return num; 
}

let n = 5; 
console.log(factorial(n));  
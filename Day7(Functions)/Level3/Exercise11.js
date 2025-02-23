function sum(...args) {
    let total = 0;
    for (let num of args) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3));        
console.log(sum(10, 20));        
console.log(sum());              
console.log(sum(5, -5, 10));   
console.log(sum(5));  

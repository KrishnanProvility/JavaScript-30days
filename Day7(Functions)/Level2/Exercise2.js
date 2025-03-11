
function solveLinEquation(a, b, c, x, y) {
    
    const result = a * x + b * y + c;

    return result;
}

const a = 2;  
const b = 3;
const c = -5; 
const x = 1;  
const y = -2; 

const solvedValue = solveLinEquation(a, b, c, x, y);

console.log(`The result of the linear equation is: ${solvedValue}`);

function outerFunction(){
    let count=0;

    function innerFunction(){
        count++
        return count
    }
    return innerFunction
}

const functionReturn =outerFunction();

console.log(functionReturn());
console.log(functionReturn());
console.log(functionReturn());

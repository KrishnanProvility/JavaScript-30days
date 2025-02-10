function outerFunction(){
    let count=0;

    function counting(){
        count++
        return count
    }
    function minusing(){
        count--
        return count
    }
    function doubling(){
        count+=2
        return count
    }
    return {counting:counting(),
        minusing:minusing(),doubling:doubling()
    }
}

const functionReturn =outerFunction();

console.log(functionReturn.counting);
console.log(functionReturn.doubling);
console.log(functionReturn.minusing);

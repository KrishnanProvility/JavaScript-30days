function sumOfArrayItems(arr) {
    
    if (!Array.isArray(arr)) {
        return "Input must be an array.";
    }
    if (!arr.every(item => typeof item === 'number')) {
        return "All items in the array must be numbers.";
    }

  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}


console.log(sumOfArrayItems([1,2,3,4,5,6]));
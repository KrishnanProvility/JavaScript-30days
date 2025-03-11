 
let points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8', '-12'];


let numbers = points
  .map(point => point.match(/-?\d+/)) 
  .map(match => parseInt(match[0])); 


numbers = [...new Set(numbers)].sort((a, b) => a - b);


const distance = numbers[numbers.length - 1] - numbers[0];

console.log(distance);
 
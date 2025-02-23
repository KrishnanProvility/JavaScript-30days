//while, for, for of, forEach

let i = 0;
const num =[1,2,3,4,5]
console.time('while loop')
while (i <5) {
  console.log("while:" + num[i]);
  i++;
}
console.timeEnd('while loop')

console.time('for loop')
for (let i = 0; i < 5; i++) {
  console.log("for:" + num[i]);
}
console.timeEnd('for loop')


console.time('for of')
for(let j of num)
{
  console.log("forof:" + j);
}
console.timeEnd('for of')

console.time('for each')
num.forEach((num)=>{
  console.log("for each :" + num);
})
console.timeEnd('for each')
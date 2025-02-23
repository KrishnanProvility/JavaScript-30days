function reverseArray(arr)
{
const  newArray = [];
for(let i = arr.length-1 ;i>=0;i--)
{
    newArray.push(arr[i]);
}
return newArray
}



const nums =[6,7,8,9,0];


const solutionOfarray =reverseArray([1,2,3,4,5]);
const solutionOfarray2 =reverseArray(nums);

console.log(solutionOfarray);
console.log(solutionOfarray2);

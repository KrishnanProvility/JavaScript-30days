function capitalizeArray(arr)
{
const  capitalizedarray = [];
for(let i = 0;i<arr.length;i++)
{
    capitalizedarray.push(arr[i].toUpperCase());
}
return capitalizedarray
}

const character =["krishnan","harish","uma","vignesh"];


const solutionOfarray=capitalizeArray(character);

console.log(solutionOfarray);

//exercise 1:
const array =Array();

console.log(array);

//exercise 2:
const numbers =[1,2,3,4,5];

console.log(numbers);

//exercise 3:
console.log(numbers.length);

//exercise 4:
const mixedDataTypes = ["krishnan",2,10,"provility","java","JavaScript"];

console.log(mixedDataTypes);

//exericse 5:

//firstItem
const lastIndex =mixedDataTypes.length-1;
console.log(mixedDataTypes[0]);
//middle item
console.log(mixedDataTypes[parseInt(lastIndex/2)+1]);
//last Item
console.log(mixedDataTypes[lastIndex]);

//exercise 6:
const itCompanies =[ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"];

//exercise 7:
console.log(itCompanies);

//exercise 8:

//numbers of companies
console.log(itCompanies.length);

//exercise 9:

//firstItem
const last =itCompanies.length-1;
console.log(itCompanies[0]);
//middle item
console.log(itCompanies[parseInt(last/2)]);
//last Item
console.log(itCompanies[last]);

//exercise 10:

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

//exercise 11:

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

//exercise 12:

console.log(itCompanies.toString()+" are big It companies");

//execise 13:
const comapnyName ="Google";

if(itCompanies.includes(comapnyName)==true)
{
console.log(comapnyName);
}
else
{
    console.log("Company not found");
}

//exercise 14:

console.log(itCompanies.indexOf([/o+/gi]))

//exercise 15:

console.log(itCompanies.sort());

//exericse 16:

console.log(itCompanies.reverse());

//exercise 17:

console.log(itCompanies.slice(0,3));
//exercise 18:

console.log(itCompanies.slice(4,7));

//exercise 19:

console.log(itCompanies.slice(4,7));

//exercise 20:
itCompanies.shift()
console.log(itCompanies);

//exercise 21:
 
console.log(itCompanies.splice());  

//exercise 1:
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
countries.forEach((element) => {
  console.log(element);
})

//exercise 2:
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
names.forEach((element) => {
  console.log(element);
})

//exercise 3:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach((element) => {
  console.log(element);
})

//exercise 6:

countries.map((country) => {
  console.log(country.toUpperCase())
})

//exercise 7:

countries.map((country) => {
  console.log(country.length)
})
//exercise 8:
let squarenums = numbers.map((num) => num ** 2)
console.log(squarenums);

//exercise 9:
let uppername = names.map((name) => {
  return name.toUpperCase();
})
console.log(uppername);


//exercise 10:

products.map((product) => {
  console.log(`Product name :${product.product} and is price is ${product.price}`);
})
//exercise 11:

const filering = countries.filter((country) => {
  return country.includes("land");
})

console.log(filering)

//exercise 12:

const filering2 = countries.filter((country) => {
  const countryCheck = country.length >= 6;
  return countryCheck
})

console.log(filering2)

//exercise 13:

const filering3 = countries.filter((country) => {
  const countryCheck = country.length >= 6;
  return countryCheck
})

console.log(filering3)

//exercise 14:

const filering4 = countries.filter((country) => {
  const countryCheck = country.startsWith('F')
  return countryCheck
})

console.log(filering4);

//exercise 15:

products.map((product) => {
  console.log(`Product name :${product.product} and is price is ${product.price}`);
})

//exercise 16:


const combineArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Asabeneh', 'Mathias', 'Elias', 'Brook'];

const getStringLists = (arary) => {

  const stringList = arary.filter((element) => {
    return typeof (element) == "string";
  })

  return stringList
}
console.log(getStringLists(combineArray));

//exercise 17:  


let num = numbers.reduce((acc, current) => acc + current, 0);
console.log(num);

//exercise 18:
const countriess = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

const sentance = countries.reduce((acc, current, index) => {
  if (countries.length - 1 == index) {
    return `${acc} and ${current} `;
  } else {
    return acc + ',' + current;
  }
}) + 'are north European countries.';

console.log(sentance);

//exercise 20:
const checkNames = names.some((element) => {
  return element.length > 7
})

console.log(checkNames);

//exercise 21:
const checkcountry = countries.every((element) => {
  return element.includes('land');
})

console.log(checkcountry);

//  exercise 23:

const findcountry = countries.find((country) => {

  if (country.length > 7) {
    return country;
  }
})
if (findcountry) {
  console.log(findcountry);
} else {
  console.log("nothing to print");

}

// exercise 24:


const findcountry3 = countries.findIndex((country) => {

  if (country.length > 6) {
    return country;
  }
})
if (findcountry != -1) {
  console.log(findcountry);
} else {
  console.log("nothing to print");

}

//exercise 25:
const findcountry4 = countries.findIndex((country) => {

  if (country == "Norway") {
    return country;
  }
})
if (findcountry != -1) {
  console.log(findcountry);
} else {
  console.log("nothing to print");

}


//exercise 26:


const findcountry5 = countries.findIndex((country) => {

  if (country == "Russia") {
    return country;
  }
})
if (findcountry != -1) {
  console.log(findcountry);
} else {
  console.log("nothing to print");

}
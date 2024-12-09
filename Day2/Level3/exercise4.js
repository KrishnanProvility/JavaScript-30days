//excercise 4:
console.log("excercise 4:");
const text ='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let first2 = text.match(/\d+/g);
const salary =parseInt(first2[0]);
const annual_bonus =parseInt(first2[1]);
const onlineCouse =parseInt(first2[2]);
let annualincome = (salary*12)+(onlineCouse*12)+annual_bonus
console.log(annualincome)
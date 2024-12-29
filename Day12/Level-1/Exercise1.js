const sentence =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
const regExp = /\d+/g;
const annualSalary = sentence
  .match(regExp)
  .reduce((sum, salary) => (sum += parseInt(salary)), 0);

console.log(annualSalary);

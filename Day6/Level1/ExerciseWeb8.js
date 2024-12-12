

const numbers =[];

for(let i = 0 ;i<5 ;i++)
{
    let randomNumber =Math.round(Math.random()*5);
    if(!numbers.includes(randomNumber))
    numbers.push(randomNumber);
}

console.log(numbers);

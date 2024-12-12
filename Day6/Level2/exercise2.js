
const charachters =[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

let script ="#";


for(let i = 0 ;i<6 ;i++)
{
    const randomNumber =Math.floor(Math.random()*charachters.length);
    
    script=script.concat(charachters[randomNumber]);
    }

console.log(script);

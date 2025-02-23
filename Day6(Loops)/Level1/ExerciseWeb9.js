
const charachters =[0,1,2,3,4,5,6,7,8,9];

let script ="";

for(let i =97 ;i<=122;i++)
    {
        charachters.push(String.fromCharCode(i));
    }
    
for(let i = 0 ;i<6 ;i++)
{
    const randomNumber =Math.round(Math.random()*charachters.length);
    
    script=script.concat(charachters[randomNumber]);
    }

console.log(script);

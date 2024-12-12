
function arrayOfHexaColors()
{
    const charachters =[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    let script ="#";
    const size =parseInt(prompt("Enter Size Of Array:"))
   let arrayOfHexaColors=[]
for(let j =0 ;j<size ;j++)
{for(let i = 0 ;i<6 ;i++)
{
    const randomNumber =Math.floor(Math.random()*charachters.length);
    
    arrayOfHexaColors.push(script.concat(charachters[randomNumber]));
    }}


}

randomHexaNumberGenerator()
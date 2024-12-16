


let rgbColorGenerator = ()=>{
    const size =parseInt(prompt("Enter Size of array:"));
    const rgbColorArray =[];
    for(let i = 0  ;i<size ;i++)
    {
    const randomNumber = Math.floor(Math.random()*999);
    rgbColorArray.push(`rgb(${randomNumber},180,80)`)
}
console.log(rgbColorArray)
}
    
    rgbColorGenerator();
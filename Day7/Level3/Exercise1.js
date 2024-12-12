
function randomUserIp(){
    let numberOfids=parseInt(prompt("Enter Number of Id's:"))
    let numOfChars=parseInt(prompt("Enter Number of character:"))
    const charachters =[0,1,2,3,4,5,6,7,8,9];
    let script ="";
    for(let i =97 ;i<=122;i++)
        {
            charachters.push(String.fromCharCode(i));
     
        } 
    for(let j=0;j<numberOfids;j++)       
    {
        for(let i = 0 ;i<numOfChars ;i++)
    {
        const randomNumber =Math.round(Math.random()*charachters.length);
        
        script=script.concat(charachters[randomNumber]);
    }
    script=script.concat("\n")
}
        console.log(script);   
    }
    
    randomUserIp()
    
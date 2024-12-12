
function randomUserIp(){
    const charachters =[0,1,2,3,4,5,6,7,8,9];
    
    
    let macaddress =" ";
    
    for(let i =97 ;i<=122;i++)
        {
            charachters.push(String.fromCharCode(i));
        }
        
    for(let i = 0 ;i<12 ;i++)
    {
        const randomNumber =Math.round(Math.random()*charachters.length);
       

        macaddress=macaddress.concat(charachters[randomNumber]);
        if(macaddress.length%3==0)
            {
                macaddress=macaddress.concat(":");
            }
        }
        console.log(macaddress.slice(0,-1));
    }
    
    randomUserIp()
    
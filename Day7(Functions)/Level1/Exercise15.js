function findMax(args){
    let maxValue =0;
    for(let element of args)
    {
        if(maxValue<element)
        {
            maxValue = element;
        }   
    }
    console.log(maxValue);
    }
    
    const length=prompt("Enter length of numbers:")
    const nums =[];
     
    for(let i = 0 ;i<length;i++)
        {
           nums.push(parseInt(prompt("Enter the number:")))
        }
    findMax(nums);
    
    
    
    
    
    
    
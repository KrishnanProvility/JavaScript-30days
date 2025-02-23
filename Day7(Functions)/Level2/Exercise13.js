

const length =parseInt(prompt("Enter the length of array:"));



let evensAndOdds = (length)=>{
    let oddCount=0;
    let evenCount=0;
    for(let i = 0 ; i<=length;i++)
        {
          
           i%2==0?evenCount++:oddCount++
        }

        console.log(`The number of odds are ${oddCount}.
The number of evens are ${evenCount}.`);
        
        
        
}

evensAndOdds(length);
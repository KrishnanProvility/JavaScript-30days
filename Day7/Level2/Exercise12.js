const numsArray =[];

const length =parseInt(prompt("Enter the length of array:"));

for(let i = 0 ; i<length;i++)
{
    numsArray.push(parseInt(prompt("Enter the num:")))
}


let sumOfOdds = (numsArray)=>{
    sum=0;
        for(let num of numsArray)
        {
            if(num%2==0)
            {
                sum+=num
            }
            
        } 
        console.log(sum)   
}

sumOfOdds(numsArray)
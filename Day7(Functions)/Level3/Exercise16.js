function checkUnique(num){
    let count =0;
    for(let i = 0 ;i<num.length;i++)
    {
        let count =0;
    for(let j = 0 ;j<num.length;j++)
        {
            
            if(num[i]===num[j])
            {
                count++;
            }
            
        }
        if(count>1)
        {
            return "Not a unique array"
        }
    }
    return "unique Array"
    
}

console.log(checkUnique(['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM','IBM']));  

console.log(checkUnique(['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']));


console.log(checkUnique([1,2,3,4,5,6,7,8]))

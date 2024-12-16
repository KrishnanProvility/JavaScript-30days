function checkUnique(num){
    let count =0;
    for(let i = 0 ;i<num.length;i++)
    {
        let count =0;
    for(let j = 0 ;j<num.length;j++)
        {
            
            if(typeof(num[i])===typeof(num[j]))
            {
                count++;
            }
            
        }
        if(count===num.length)
        {
            return "same Data Type";    
        }
    }
    return "Different Data type";
    
}

console.log(checkUnique(['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM','IBM']));  

console.log(checkUnique(['Google', 'Facebook','Apple', 'Amazon',5,  'IBM']));


console.log(checkUnique([1,2,3,4,5,6,7,8]))

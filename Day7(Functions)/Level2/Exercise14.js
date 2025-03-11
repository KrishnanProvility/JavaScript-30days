let sumofArrgument =(...args) => 
    {
        let sum =0
        for(let nums of args)
        {
            sum+=nums
        }
        console.log(sum)
    }


    sumofArrgument(1,2,3,4,5,6,7);

    sumofArrgument(10,20,30);
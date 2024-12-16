function sevenRandomNumbers()
{
    const nums =[];
    for(let i = 0 ; nums.length <7 ;i++)
    {
        let num = Math.round(Math.random()*10)
        if(!nums.includes(num))
        {
            nums.push(num);
        }
    }
    return nums;
}

const randomSevenNum =sevenRandomNumbers();
console.log(randomSevenNum);

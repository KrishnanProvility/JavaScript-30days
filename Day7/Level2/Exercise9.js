const numsArray =[1,2,3,4,5];


let removeItem = (num)=>{
        numsArray.splice(num,1);   
        console.log(numsArray)   
}

removeItem(2)
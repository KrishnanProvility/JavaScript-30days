
let totalPrice =products.map((element) =>{
    if(typeof(element.price) =="string")
    {
     return element.price = 0;
    }
    return element.price
  }).reduce((acc,element)=>{
    let total =acc+element
    return total;
  },0)
  console.log(totalPrice);
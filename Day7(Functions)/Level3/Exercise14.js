let modifyArray =(arr)=>{
    if(arr.length <=4)
    {
        return " not found";
        
    }
    else{
        let temp =arr[4].toUpperCase();
        arr[4] =temp;

          return arr
}
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));

console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));


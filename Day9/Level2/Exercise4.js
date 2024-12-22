const country ='india'
const lettersCount =(country)=>{

    const lettersCountArray =[]
    let letter=''
    
    for(let i =0 ;i<country.length ;i++){
      let count =0;
      for(let j =0 ;j<country.length ;j++){
        if(country[i]==country[j])
        {
          count++;
        }
      }
      if(!letter.includes(country[i])){
        letter=letter.concat(country[i]);
        lettersCountArray.push({letter:country[i],numbersOfTime :count})
      }
    }
    return lettersCountArray
  }
  console.log(lettersCount(country));
  
  
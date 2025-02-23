
function  mostSpokenLanguages(countries_data, num){

    const languages =countries_data.map((lan)=>{
      return lan.languages
    }).reduce((acc, current) => acc.concat(current), []);
  
  
    const setLanguages = new Set(languages);
  
    const countingLAng =[]
  
    for(let lan of setLanguages){
      const filteredLang =languages.filter(lang=>{
        return lang===lan
      })
      countingLAng.push({lang:lan ,count :filteredLang.length})
    }
    const sortedlang =countingLAng.sort((a,b)=>{
      return b.count-a.count;
    }).filter((_,n) => {
      return n<num
    })
    console.log(sortedlang);
    
  }
   const sortedlang =mostSpokenLanguages(countries_data,10)
    
    
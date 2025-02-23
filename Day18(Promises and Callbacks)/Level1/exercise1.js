const countriesAPI = 'https://restcountries.com/v2/all'

const countyFetch =async () =>{
  try{
    const response = await fetch(countriesAPI);
    const countrys = await response.json();
    const filteredcountry = countrys.map((country)=>{
      filterList =[];
      filterList.push(country.name);
      filterList.push(country.capital)
      filterList.push(country.languages)
      filterList.push(country.population)
      filterList.push(country.area)
      return filterList
    })
    console.log(filteredcountry);
    
  }
  catch(err){
    console.error(err)
  }
}
countyFetch();
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  const countries = [
    'Finland', 
    'Helsinki',
    'Sweden', 
    'Stockholm',
    'Norway', 
    'Oslo'
  ]
  
  //EXERCISE 1:
  const companies =new Set();
  
  console.log(companies);
  
  //exercise 2:
  
  for(let i =0 ;i <=10 ; i++)
    {
      companies.add(i)
    }   
  
  console.log(companies);
  
  //exercise 3:
  
  companies.delete(1)
  
  console.log(companies);
  
  //exercise 4:
  
  companies.clear();
  
  console.log(companies);
  
  //exercise 5:
  
  const languagesSet =new Set(languages);
  
  console.log(languagesSet);
  
  //exercise 6:
  
  const countriesWithCharLength = countries.map(country =>{
    return [country,country.length]
  })
  
  console.log(countriesWithCharLength);
  
  const setOfCountries =new Map(countriesWithCharLength)
  
  console.log(setOfCountries);
  
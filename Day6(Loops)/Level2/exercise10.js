const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Iceland',
    'Kenya'
  ];



 const newCountries =[];


  for(let i = 0;i<=countries.length-1;i++)
  {

    if(countries[i].length==5)
{
    newCountries.push(countries[i]);
}
  }

  console.log(newCountries)
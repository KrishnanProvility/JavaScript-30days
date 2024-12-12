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



  let bigCountry =countries[0];


  for(let i = 0;i<=countries.length-1;i++)
  {

    if(countries[i].length>bigCountry.length)
{
    bigCountry=countries[i];
}
  }

  console.log(bigCountry)
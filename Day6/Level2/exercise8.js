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

  const newCountry =[];


  for(let i = 0;i<=countries.length-1;i++)
  {
if(countries[i].endsWith("ia"))
    newCountry.push(countries[i]);
  }

  console.log(newCountry)
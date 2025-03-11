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
    'Kenya'
  ];

  const newCountry =[];


  for(let i = 0;i<=countries.length-1;i++)
  {

    newCountry.push(countries[i].length);
  }

  console.log(newCountry)
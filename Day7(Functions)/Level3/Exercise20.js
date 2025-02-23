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

  function reverseCountries(){
    const CopyCountries =[]

    CopyCountries.push(...countries);

    countries.reverse();
  }
reverseCountries();
  console.log(countries);
  
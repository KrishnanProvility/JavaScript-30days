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
  const copyCountries =[]
  function reverseCountries(){

    copyCountries.push(...countries);

    countries.reverse();
  }
reverseCountries();
  console.log(`Orginal Array Reversed : ${countries}`);
  console.log(`copy Array : ${copyCountries}`);
  
  
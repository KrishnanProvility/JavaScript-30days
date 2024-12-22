const countries_data = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Uzbek", "Turkmen"],
    population: 40218234,
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    region: "Asia",
    area: 652230,
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    languages: ["Swedish", "Turkmen"],
    population: 28875,
    flag: "https://flagcdn.com/ax.svg",
    region: "Europe",
    area: 1580,
  },
  {
    name: "Albania",
    capital: "Tirana",
    languages: ["Albanian"],
    population: 2837743,
    flag: "https://flagcdn.com/al.svg",
    region: "Europe",
    area: 28748,
  },
  {
    name: "Algeria",
    capital: "Algiers",
    languages: ["Arabic"],
    population: 43851043,
    flag: "https://flagcdn.com/dz.svg",
    region: "Africa",
    area: 2381741,
  },
  {
    name: "American Samoa",
    capital: "Pago Pago",
    languages: ["English", "Samoan"],
    population: 55197,
    flag: "https://flagcdn.com/as.svg",
    region: "Oceania",
    area: 199,
  },
  {
    name: "Andorra",
    capital: "Andorra la Vella",
    languages: ["Catalan"],
    population: 77265,
    flag: "https://flagcdn.com/ad.svg",
    region: "Europe",
    area: 468,
  },
  {
    name: "Angola",
    capital: "Luanda",
    languages: ["Portuguese"],
    population: 32866268,
    flag: "https://flagcdn.com/ao.svg",
    region: "Africa",
    area: 1246700,
  },
  {
    name: "Anguilla",
    capital: "The Valley",
    languages: ["English"],
    population: 13452,
    flag: "https://flagcdn.com/ai.svg",
    region: "Americas",
    area: 91,
  },
  {
    name: "Antarctica",
    languages: ["English", "Russian"],
    population: 1000,
    flag: "https://flagcdn.com/aq.svg",
    region: "Polar",
    area: 14000000,
  },
  {
    name: "Antigua and Barbuda",
    capital: "Saint John's",
    languages: ["English"],
    population: 97928,
    flag: "https://flagcdn.com/ag.svg",
    region: "Americas",
    area: 442,
  },
  {
    name: "Argentina",
    capital: "Buenos Aires",
    languages: ["Spanish", "Guaraní"],
    population: 45376763,
    flag: "https://flagcdn.com/ar.svg",
    region: "Americas",
    area: 2780400,
  },
  {
    name: "Armenia",
    capital: "Yerevan",
    languages: ["Armenian"],
    population: 2963234,
    flag: "https://flagcdn.com/am.svg",
    region: "Asia",
    area: 29743,
  },
];

function mostPopulatedCountries(countries, count) {
  const sortedCountries = countries
    .map((country) => {
      return {
        name: country.name,
        population: country.population,
      };
    })
    .sort((a, b) => b.population - a.population);
  return sortedCountries.slice(0, count);
}
console.log(mostPopulatedCountries(countries_data, 10));

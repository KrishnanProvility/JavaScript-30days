//find the most populated country

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
  
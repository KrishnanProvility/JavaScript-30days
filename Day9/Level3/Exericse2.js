function mostSpokenLanguages(countries, count) {
  const languageArray = [];
  const listOfLanguages = countries.forEach((element) => {
    element.languages.forEach((language) => {
      const checkexist = languageArray.find((element) => {
        return element.language === language;
      });
      if (checkexist) {
        checkexist.count++;
      } else {
        languageArray.push({ language: language, count: 1 });
      }
    });
  });
  const languageSort = languageArray.sort((a, b) => b.count - a.count);
  return languageSort.slice(0, count);
}
console.log(mostSpokenLanguages(countries_data, 3));

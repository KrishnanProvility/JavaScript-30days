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
      languages: ["Swedish"],
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
    {
      name: "Aruba",
      capital: "Oranjestad",
      languages: ["Dutch", "(Eastern) Punjabi"],
      population: 106766,
      flag: "https://flagcdn.com/aw.svg",
      region: "Americas",
      area: 180,
    },
    {
      name: "Australia",
      capital: "Canberra",
      languages: ["English"],
      population: 25687041,
      flag: "https://flagcdn.com/au.svg",
      region: "Oceania",
      area: 7692024,
    },
    {
      name: "Austria",
      capital: "Vienna",
      languages: ["German"],
      population: 8917205,
      flag: "https://flagcdn.com/at.svg",
      region: "Europe",
      area: 83871,
    },
    {
      name: "Azerbaijan",
      capital: "Baku",
      languages: ["Azerbaijani"],
      population: 10110116,
      flag: "https://flagcdn.com/az.svg",
      region: "Asia",
      area: 86600,
    },
    {
      name: "Bahamas",
      capital: "Nassau",
      languages: ["English"],
      population: 393248,
      flag: "https://flagcdn.com/bs.svg",
      region: "Americas",
      area: 13943,
    },
    {
      name: "Bahrain",
      capital: "Manama",
      languages: ["Arabic"],
      population: 1701583,
      flag: "https://flagcdn.com/bh.svg",
      region: "Asia",
      area: 765,
    },
    {
      name: "Bangladesh",
      capital: "Dhaka",
      languages: ["Bengali"],
      population: 164689383,
      flag: "https://flagcdn.com/bd.svg",
      region: "Asia",
      area: 147570,
    },
    {
      name: "Barbados",
      capital: "Bridgetown",
      languages: ["English"],
      population: 287371,
      flag: "https://flagcdn.com/bb.svg",
      region: "Americas",
      area: 430,
    },
    {
      name: "Belarus",
      capital: "Minsk",
      languages: ["Belarusian", "Russian"],
      population: 9398861,
      flag: "https://flagcdn.com/by.svg",
      region: "Europe",
      area: 207600,
    },
    {
      name: "Belgium",
      capital: "Brussels",
      languages: ["Dutch", "French", "German"],
      population: 11555997,
      flag: "https://flagcdn.com/be.svg",
      region: "Europe",
      area: 30528,
    },
    {
      name: "Belize",
      capital: "Belmopan",
      languages: ["English", "Spanish"],
      population: 397621,
      flag: "https://flagcdn.com/bz.svg",
      region: "Americas",
      area: 22966,
    },
    {
      name: "Benin",
      capital: "Porto-Novo",
      languages: ["French"],
      population: 12123198,
      flag: "https://flagcdn.com/bj.svg",
      region: "Africa",
      area: 112622,
    },
    {
      name: "Bermuda",
      capital: "Hamilton",
      languages: ["English"],
      population: 63903,
      flag: "https://flagcdn.com/bm.svg",
      region: "Americas",
      area: 54,
    },
    {
      name: "Bhutan",
      capital: "Thimphu",
      languages: ["Dzongkha"],
      population: 771612,
      flag: "https://flagcdn.com/bt.svg",
      region: "Asia",
      area: 38394,
    },
    {
      name: "Bolivia (Plurinational State of)",
      capital: "Sucre",
      languages: ["Spanish", "Aymara", "Quechua"],
      population: 11673029,
      flag: "https://flagcdn.com/bo.svg",
      region: "Americas",
      area: 1098581,
    },
    {
      name: "Bonaire, Sint Eustatius and Saba",
      capital: "Kralendijk",
      languages: ["Dutch"],
      population: 17408,
      flag: "https://flagcdn.com/bq.svg",
      region: "Americas",
      area: 294,
    },
    {
      name: "Bosnia and Herzegovina",
      capital: "Sarajevo",
      languages: ["Bosnian", "Croatian", "Serbian"],
      population: 3280815,
      flag: "https://flagcdn.com/ba.svg",
      region: "Europe",
      area: 51209,
    },
    {
      name: "Botswana",
      capital: "Gaborone",
      languages: ["English", "Tswana"],
      population: 2351625,
      flag: "https://flagcdn.com/bw.svg",
      region: "Africa",
      area: 582000,
    },
    {
      name: "Bouvet Island",
      languages: ["Norwegian", "Norwegian Bokmål", "Norwegian Nynorsk"],
      population: 0,
      flag: "https://flagcdn.com/bv.svg",
      region: "Antarctic Ocean",
      area: 49,
    },
    {
      name: "Brazil",
      capital: "Brasília",
      languages: ["Portuguese"],
      population: 212559409,
      flag: "https://flagcdn.com/br.svg",
      region: "Americas",
      area: 8515767,
    },
    {
      name: "British Indian Ocean Territory",
      capital: "Diego Garcia",
      languages: ["English"],
      population: 3000,
      flag: "https://flagcdn.com/io.svg",
      region: "Africa",
      area: 60,
    },
    {
      name: "United States Minor Outlying Islands",
      languages: ["English"],
      population: 300,
      flag: "https://flagcdn.com/um.svg",
      region: "Americas",
    },
    {
      name: "Virgin Islands (British)",
      capital: "Road Town",
      languages: ["English"],
      population: 30237,
      flag: "https://flagcdn.com/vg.svg",
      region: "Americas",
      area: 151,
    },
    {
      name: "Virgin Islands (U.S.)",
      capital: "Charlotte Amalie",
      languages: ["English"],
      population: 106290,
      flag: "https://flagcdn.com/vi.svg",
      region: "Americas",
      area: 346.36,
    },
    {
      name: "Brunei Darussalam",
      capital: "Bandar Seri Begawan",
      languages: ["Malay"],
      population: 437483,
      flag: "https://flagcdn.com/bn.svg",
      region: "Asia",
      area: 5765,
    },
    {
      name: "Bulgaria",
      capital: "Sofia",
      languages: ["Bulgarian"],
      population: 6927288,
      flag: "https://flagcdn.com/bg.svg",
      region: "Europe",
      area: 110879,
    },
    {
      name: "Burkina Faso",
      capital: "Ouagadougou",
      languages: ["French", "Fula"],
      population: 20903278,
      flag: "https://flagcdn.com/bf.svg",
      region: "Africa",
      area: 272967,
    },
    {
      name: "Burundi",
      capital: "Gitega",
      languages: ["French", "Kirundi"],
      population: 11890781,
      flag: "https://flagcdn.com/bi.svg",
      region: "Africa",
      area: 27834,
    },
    {
      name: "Cambodia",
      capital: "Phnom Penh",
      languages: ["Khmer"],
      population: 16718971,
      flag: "https://flagcdn.com/kh.svg",
      region: "Asia",
      area: 181035,
    },
    {
      name: "Cameroon",
      capital: "Yaoundé",
      languages: ["English", "French"],
      population: 26545864,
      flag: "https://flagcdn.com/cm.svg",
      region: "Africa",
      area: 475442,
    },
    {
      name: "Canada",
      capital: "Ottawa",
      languages: ["English", "French"],
      population: 38005238,
      flag: "https://flagcdn.com/ca.svg",
      region: "Americas",
      area: 9984670,
    },
    {
      name: "Cabo Verde",
      capital: "Praia",
      languages: ["Portuguese"],
      population: 555988,
      flag: "https://flagcdn.com/cv.svg",
      region: "Africa",
      area: 4033,
    },
    {
      name: "Cayman Islands",
      capital: "George Town",
      languages: ["English"],
      population: 65720,
      flag: "https://flagcdn.com/ky.svg",
      region: "Americas",
      area: 264,
    },
    {
      name: "Central African Republic",
      capital: "Bangui",
      languages: ["French", "Sango"],
      population: 4829764,
      flag: "https://flagcdn.com/cf.svg",
      region: "Africa",
      area: 622984,
    },
    {
      name: "Chad",
      capital: "N'Djamena",
      languages: ["French", "Arabic"],
      population: 16425859,
      flag: "https://flagcdn.com/td.svg",
      region: "Africa",
      area: 1284000,
    },
    {
      name: "Chile",
      capital: "Santiago",
      languages: ["Spanish"],
      population: 19116209,
      flag: "https://flagcdn.com/cl.svg",
      region: "Americas",
      area: 756102,
    },
    {
      name: "China",
      capital: "Beijing",
      languages: ["Chinese"],
      population: 1402112000,
      flag: "https://flagcdn.com/cn.svg",
      region: "Asia",
      area: 9640011,
    },
    {
      name: "Christmas Island",
      capital: "Flying Fish Cove",
      languages: ["English"],
      population: 2072,
      flag: "https://flagcdn.com/cx.svg",
      region: "Oceania",
      area: 135,
    },
    {
      name: "Cocos (Keeling) Islands",
      capital: "West Island",
      languages: ["English"],
      population: 550,
      flag: "https://flagcdn.com/cc.svg",
      region: "Oceania",
      area: 14,
    },
    {
      name: "Colombia",
      capital: "Bogotá",
      languages: ["Spanish"],
      population: 50882884,
      flag: "https://flagcdn.com/co.svg",
      region: "Americas",
      area: 1141748,
    },
    {
      name: "Comoros",
      capital: "Moroni",
      languages: ["Arabic", "French"],
      population: 869595,
      flag: "https://flagcdn.com/km.svg",
      region: "Africa",
      area: 1862,
    },
    {
      name: "Congo",
      capital: "Brazzaville",
      languages: ["French", "Lingala"],
      population: 5518092,
      flag: "https://flagcdn.com/cg.svg",
      region: "Africa",
      area: 342000,
    },
    {
      name: "Congo (Democratic Republic of the)",
      capital: "Kinshasa",
      languages: ["French", "Lingala", "Kongo", "Swahili", "Luba-Katanga"],
      population: 89561404,
      flag: "https://flagcdn.com/cd.svg",
      region: "Africa",
      area: 2344858,
    },
    {
      name: "Cook Islands",
      capital: "Avarua",
      languages: ["English", "Cook Islands Māori"],
      population: 18100,
      flag: "https://flagcdn.com/ck.svg",
      region: "Oceania",
      area: 236,
    },
    {
      name: "Costa Rica",
      capital: "San José",
      languages: ["Spanish"],
      population: 5094114,
      flag: "https://flagcdn.com/cr.svg",
      region: "Americas",
      area: 51100,
    },
    {
      name: "Croatia",
      capital: "Zagreb",
      languages: ["Croatian"],
      population: 4047200,
      flag: "https://flagcdn.com/hr.svg",
      region: "Europe",
      area: 56594,
    },
    {
      name: "Cuba",
      capital: "Havana",
      languages: ["Spanish"],
      population: 11326616,
      flag: "https://flagcdn.com/cu.svg",
      region: "Americas",
      area: 109884,
    },
    {
      name: "Curaçao",
      capital: "Willemstad",
      languages: ["Dutch", "(Eastern) Punjabi", "English"],
      population: 155014,
      flag: "https://flagcdn.com/cw.svg",
      region: "Americas",
      area: 444,
    },
    {
      name: "Cyprus",
      capital: "Nicosia",
      languages: ["Greek (modern)", "Turkish", "Armenian"],
      population: 1207361,
      flag: "https://flagcdn.com/cy.svg",
      region: "Europe",
      area: 9251,
    },
    {
      name: "Czech Republic",
      capital: "Prague",
      languages: ["Czech", "Slovak"],
      population: 10698896,
      flag: "https://flagcdn.com/cz.svg",
      region: "Europe",
      area: 78865,
    },
    {
      name: "Denmark",
      capital: "Copenhagen",
      languages: ["Danish"],
      population: 5831404,
      flag: "https://flagcdn.com/dk.svg",
      region: "Europe",
      area: 43094,
    },
    {
      name: "Djibouti",
      capital: "Djibouti",
      languages: ["French", "Arabic"],
      population: 988002,
      flag: "https://flagcdn.com/dj.svg",
      region: "Africa",
      area: 23200,
    },
    {
      name: "Dominica",
      capital: "Roseau",
      languages: ["English"],
      population: 71991,
      flag: "https://flagcdn.com/dm.svg",
      region: "Americas",
      area: 751,
    },
    {
      name: "Dominican Republic",
      capital: "Santo Domingo",
      languages: ["Spanish"],
      population: 10847904,
      flag: "https://flagcdn.com/do.svg",
      region: "Americas",
      area: 48671,
    },
    {
      name: "Ecuador",
      capital: "Quito",
      languages: ["Spanish"],
      population: 17643060,
      flag: "https://flagcdn.com/ec.svg",
      region: "Americas",
      area: 276841,
    },
    {
      name: "Egypt",
      capital: "Cairo",
      languages: ["Arabic"],
      population: 102334403,
      flag: "https://flagcdn.com/eg.svg",
      region: "Africa",
      area: 1002450,
    },
    {
      name: "El Salvador",
      capital: "San Salvador",
      languages: ["Spanish"],
      population: 6486201,
      flag: "https://flagcdn.com/sv.svg",
      region: "Americas",
      area: 21041,
    },
    {
      name: "Equatorial Guinea",
      capital: "Malabo",
      languages: ["Spanish", "French", "Portuguese", "Fang"],
      population: 1402985,
      flag: "https://flagcdn.com/gq.svg",
      region: "Africa",
      area: 28051,
    },
    {
      name: "Eritrea",
      capital: "Asmara",
      languages: [
        "Tigrinya",
        "Arabic",
        "English",
        "Tigre",
        "Kunama",
        "Saho",
        "Bilen",
        "Nara",
        "Afar",
      ],
      population: 5352000,
      flag: "https://flagcdn.com/er.svg",
      region: "Africa",
      area: 117600,
    },
    {
      name: "Estonia",
      capital: "Tallinn",
      languages: ["Estonian"],
      population: 1331057,
      flag: "https://flagcdn.com/ee.svg",
      region: "Europe",
      area: 45227,
    },
    {
      name: "Ethiopia",
      capital: "Addis Ababa",
      languages: ["Amharic"],
      population: 114963583,
      flag: "https://flagcdn.com/et.svg",
      region: "Africa",
      area: 1104300,
    },
    {
      name: "Falkland Islands (Malvinas)",
      capital: "Stanley",
      languages: ["English"],
      population: 2563,
      flag: "https://flagcdn.com/fk.svg",
      region: "Americas",
      area: 12173,
    },
    {
      name: "Faroe Islands",
      capital: "Tórshavn",
      languages: ["Faroese"],
      population: 48865,
      flag: "https://flagcdn.com/fo.svg",
      region: "Europe",
      area: 1393,
    },
    {
      name: "Fiji",
      capital: "Suva",
      languages: ["English", "Fijian", "Fiji Hindi", "Rotuman"],
      population: 896444,
      flag: "https://flagcdn.com/fj.svg",
      region: "Oceania",
      area: 18272,
    },
  ];
  
  function countOfAllLang(countries_data, num) {
    const languages = countries_data
      .map((lan) => {
        return lan.languages;
      })
      .reduce((acc, current) => acc.concat(current), []);
  
    const setLanguages = new Set(languages);
  
    const countingLAng = [];
  
    for (let lan of setLanguages) {
      const filteredLang = languages.filter((lang) => {
        return lang === lan;
      });
      countingLAng.push({ lang: lan, count: filteredLang.length });
    }
    console.log(`Total Languages :${setLanguages.size}`);
  }
  const sortedlang = countOfAllLang(countries_data);
  
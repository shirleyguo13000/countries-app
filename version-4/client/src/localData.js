// Offline backup copy of the countries.dev dataset.
// Same field names as https://countries.dev/countries, trimmed to the fields this app uses,
// so the app renders identically when the live API is unreachable.

const localData = [
  {
    "name": "Afghanistan",
    "alpha2Code": "AF",
    "alpha3Code": "AFG",
    "capital": "Kabul",
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 40218234,
    "area": 652230,
    "latlng": [
      33,
      65
    ],
    "flags": {
      "png": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
      "svg": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg"
    },
    "currencies": [
      {
        "code": "AFN",
        "name": "Afghan afghani",
        "symbol": "؋"
      }
    ]
  },
  {
    "name": "Åland Islands",
    "alpha2Code": "AX",
    "alpha3Code": "ALA",
    "capital": "Mariehamn",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 28875,
    "area": 1580,
    "latlng": [
      60.116667,
      19.9
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ax.png",
      "svg": "https://flagcdn.com/ax.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Albania",
    "alpha2Code": "AL",
    "alpha3Code": "ALB",
    "capital": "Tirana",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 2837743,
    "area": 28748,
    "latlng": [
      41,
      20
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/al.png",
      "svg": "https://flagcdn.com/al.svg"
    },
    "currencies": [
      {
        "code": "ALL",
        "name": "Albanian lek",
        "symbol": "L"
      }
    ]
  },
  {
    "name": "Algeria",
    "alpha2Code": "DZ",
    "alpha3Code": "DZA",
    "capital": "Algiers",
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 44700000,
    "area": 2381741,
    "latlng": [
      28,
      3
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/dz.png",
      "svg": "https://flagcdn.com/dz.svg"
    },
    "currencies": [
      {
        "code": "DZD",
        "name": "Algerian dinar",
        "symbol": "د.ج"
      }
    ]
  },
  {
    "name": "American Samoa",
    "alpha2Code": "AS",
    "alpha3Code": "ASM",
    "capital": "Pago Pago",
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 55197,
    "area": 199,
    "latlng": [
      -14.33333333,
      -170
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/as.png",
      "svg": "https://flagcdn.com/as.svg"
    },
    "currencies": [
      {
        "code": "USD",
        "name": "United States Dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Andorra",
    "alpha2Code": "AD",
    "alpha3Code": "AND",
    "capital": "Andorra la Vella",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 77265,
    "area": 468,
    "latlng": [
      42.5,
      1.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ad.png",
      "svg": "https://flagcdn.com/ad.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Angola",
    "alpha2Code": "AO",
    "alpha3Code": "AGO",
    "capital": "Luanda",
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 32866268,
    "area": 1246700,
    "latlng": [
      -12.5,
      18.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ao.png",
      "svg": "https://flagcdn.com/ao.svg"
    },
    "currencies": [
      {
        "code": "AOA",
        "name": "Angolan kwanza",
        "symbol": "Kz"
      }
    ]
  },
  {
    "name": "Anguilla",
    "alpha2Code": "AI",
    "alpha3Code": "AIA",
    "capital": "The Valley",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 13452,
    "area": 91,
    "latlng": [
      18.25,
      -63.16666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ai.png",
      "svg": "https://flagcdn.com/ai.svg"
    },
    "currencies": [
      {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Antarctica",
    "alpha2Code": "AQ",
    "alpha3Code": "ATA",
    "capital": "",
    "region": "Polar",
    "subregion": "Antarctica",
    "population": 1000,
    "area": 14000000,
    "latlng": [
      -74.65,
      4.48
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/aq.png",
      "svg": "https://flagcdn.com/aq.svg"
    },
    "currencies": []
  },
  {
    "name": "Antigua and Barbuda",
    "alpha2Code": "AG",
    "alpha3Code": "ATG",
    "capital": "Saint John's",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 97928,
    "area": 442,
    "latlng": [
      17.05,
      -61.8
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ag.png",
      "svg": "https://flagcdn.com/ag.svg"
    },
    "currencies": [
      {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Argentina",
    "alpha2Code": "AR",
    "alpha3Code": "ARG",
    "capital": "Buenos Aires",
    "region": "Americas",
    "subregion": "South America",
    "population": 45376763,
    "area": 2780400,
    "latlng": [
      -34,
      -64
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ar.png",
      "svg": "https://flagcdn.com/ar.svg"
    },
    "currencies": [
      {
        "code": "ARS",
        "name": "Argentine peso",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Armenia",
    "alpha2Code": "AM",
    "alpha3Code": "ARM",
    "capital": "Yerevan",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 2963234,
    "area": 29743,
    "latlng": [
      40,
      45
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/am.png",
      "svg": "https://flagcdn.com/am.svg"
    },
    "currencies": [
      {
        "code": "AMD",
        "name": "Armenian dram",
        "symbol": "֏"
      }
    ]
  },
  {
    "name": "Aruba",
    "alpha2Code": "AW",
    "alpha3Code": "ABW",
    "capital": "Oranjestad",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 106766,
    "area": 180,
    "latlng": [
      12.5,
      -69.96666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/aw.png",
      "svg": "https://flagcdn.com/aw.svg"
    },
    "currencies": [
      {
        "code": "AWG",
        "name": "Aruban florin",
        "symbol": "ƒ"
      }
    ]
  },
  {
    "name": "Australia",
    "alpha2Code": "AU",
    "alpha3Code": "AUS",
    "capital": "Canberra",
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "population": 25687041,
    "area": 7692024,
    "latlng": [
      -27,
      133
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/au.png",
      "svg": "https://flagcdn.com/au.svg"
    },
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Austria",
    "alpha2Code": "AT",
    "alpha3Code": "AUT",
    "capital": "Vienna",
    "region": "Europe",
    "subregion": "Central Europe",
    "population": 8917205,
    "area": 83871,
    "latlng": [
      47.33333333,
      13.33333333
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/at.png",
      "svg": "https://flagcdn.com/at.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Azerbaijan",
    "alpha2Code": "AZ",
    "alpha3Code": "AZE",
    "capital": "Baku",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 10110116,
    "area": 86600,
    "latlng": [
      40.5,
      47.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/az.png",
      "svg": "https://flagcdn.com/az.svg"
    },
    "currencies": [
      {
        "code": "AZN",
        "name": "Azerbaijani manat",
        "symbol": "₼"
      }
    ]
  },
  {
    "name": "Bahamas",
    "alpha2Code": "BS",
    "alpha3Code": "BHS",
    "capital": "Nassau",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 393248,
    "area": 13943,
    "latlng": [
      24.25,
      -76
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bs.png",
      "svg": "https://flagcdn.com/bs.svg"
    },
    "currencies": [
      {
        "code": "BSD",
        "name": "Bahamian dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Bahrain",
    "alpha2Code": "BH",
    "alpha3Code": "BHR",
    "capital": "Manama",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 1701583,
    "area": 765,
    "latlng": [
      26,
      50.55
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bh.png",
      "svg": "https://flagcdn.com/bh.svg"
    },
    "currencies": [
      {
        "code": "BHD",
        "name": "Bahraini dinar",
        "symbol": ".د.ب"
      }
    ]
  },
  {
    "name": "Bangladesh",
    "alpha2Code": "BD",
    "alpha3Code": "BGD",
    "capital": "Dhaka",
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 164689383,
    "area": 147570,
    "latlng": [
      24,
      90
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bd.png",
      "svg": "https://flagcdn.com/bd.svg"
    },
    "currencies": [
      {
        "code": "BDT",
        "name": "Bangladeshi taka",
        "symbol": "৳"
      }
    ]
  },
  {
    "name": "Barbados",
    "alpha2Code": "BB",
    "alpha3Code": "BRB",
    "capital": "Bridgetown",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 287371,
    "area": 430,
    "latlng": [
      13.16666666,
      -59.53333333
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bb.png",
      "svg": "https://flagcdn.com/bb.svg"
    },
    "currencies": [
      {
        "code": "BBD",
        "name": "Barbadian dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Belarus",
    "alpha2Code": "BY",
    "alpha3Code": "BLR",
    "capital": "Minsk",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "population": 9398861,
    "area": 207600,
    "latlng": [
      53,
      28
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/by.png",
      "svg": "https://flagcdn.com/by.svg"
    },
    "currencies": [
      {
        "code": "BYN",
        "name": "New Belarusian ruble",
        "symbol": "Br"
      },
      {
        "code": "BYR",
        "name": "Old Belarusian ruble",
        "symbol": "Br"
      }
    ]
  },
  {
    "name": "Belgium",
    "alpha2Code": "BE",
    "alpha3Code": "BEL",
    "capital": "Brussels",
    "region": "Europe",
    "subregion": "Western Europe",
    "population": 11555997,
    "area": 30528,
    "latlng": [
      50.83333333,
      4
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/be.png",
      "svg": "https://flagcdn.com/be.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Belize",
    "alpha2Code": "BZ",
    "alpha3Code": "BLZ",
    "capital": "Belmopan",
    "region": "Americas",
    "subregion": "Central America",
    "population": 397621,
    "area": 22966,
    "latlng": [
      17.25,
      -88.75
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bz.png",
      "svg": "https://flagcdn.com/bz.svg"
    },
    "currencies": [
      {
        "code": "BZD",
        "name": "Belize dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Benin",
    "alpha2Code": "BJ",
    "alpha3Code": "BEN",
    "capital": "Porto-Novo",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 12123198,
    "area": 112622,
    "latlng": [
      9.5,
      2.25
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bj.png",
      "svg": "https://flagcdn.com/bj.svg"
    },
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Bermuda",
    "alpha2Code": "BM",
    "alpha3Code": "BMU",
    "capital": "Hamilton",
    "region": "Americas",
    "subregion": "Northern America",
    "population": 63903,
    "area": 54,
    "latlng": [
      32.33333333,
      -64.75
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bm.png",
      "svg": "https://flagcdn.com/bm.svg"
    },
    "currencies": [
      {
        "code": "BMD",
        "name": "Bermudian dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Bhutan",
    "alpha2Code": "BT",
    "alpha3Code": "BTN",
    "capital": "Thimphu",
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 771612,
    "area": 38394,
    "latlng": [
      27.5,
      90.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bt.png",
      "svg": "https://flagcdn.com/bt.svg"
    },
    "currencies": [
      {
        "code": "BTN",
        "name": "Bhutanese ngultrum",
        "symbol": "Nu."
      },
      {
        "code": "INR",
        "name": "Indian rupee",
        "symbol": "₹"
      }
    ]
  },
  {
    "name": "Bolivia (Plurinational State of)",
    "alpha2Code": "BO",
    "alpha3Code": "BOL",
    "capital": "Sucre",
    "region": "Americas",
    "subregion": "South America",
    "population": 11673029,
    "area": 1098581,
    "latlng": [
      -17,
      -65
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bo.png",
      "svg": "https://flagcdn.com/bo.svg"
    },
    "currencies": [
      {
        "code": "BOB",
        "name": "Bolivian boliviano",
        "symbol": "Bs."
      }
    ]
  },
  {
    "name": "Bonaire, Sint Eustatius and Saba",
    "alpha2Code": "BQ",
    "alpha3Code": "BES",
    "capital": "Kralendijk",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 17408,
    "area": 294,
    "latlng": [
      12.15,
      -68.266667
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bq.png",
      "svg": "https://flagcdn.com/bq.svg"
    },
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Bosnia and Herzegovina",
    "alpha2Code": "BA",
    "alpha3Code": "BIH",
    "capital": "Sarajevo",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 3280815,
    "area": 51209,
    "latlng": [
      44,
      18
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ba.png",
      "svg": "https://flagcdn.com/ba.svg"
    },
    "currencies": [
      {
        "code": "BAM",
        "name": "Bosnia and Herzegovina convertible mark",
        "symbol": "KM"
      }
    ]
  },
  {
    "name": "Botswana",
    "alpha2Code": "BW",
    "alpha3Code": "BWA",
    "capital": "Gaborone",
    "region": "Africa",
    "subregion": "Southern Africa",
    "population": 2351625,
    "area": 582000,
    "latlng": [
      -22,
      24
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bw.png",
      "svg": "https://flagcdn.com/bw.svg"
    },
    "currencies": [
      {
        "code": "BWP",
        "name": "Botswana pula",
        "symbol": "P"
      }
    ]
  },
  {
    "name": "Bouvet Island",
    "alpha2Code": "BV",
    "alpha3Code": "BVT",
    "capital": "",
    "region": "Antarctic Ocean",
    "subregion": "South Antarctic Ocean",
    "population": 0,
    "area": 49,
    "latlng": [
      -54.43333333,
      3.4
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bv.png",
      "svg": "https://flagcdn.com/bv.svg"
    },
    "currencies": [
      {
        "code": "NOK",
        "name": "Norwegian krone",
        "symbol": "kr"
      }
    ]
  },
  {
    "name": "Brazil",
    "alpha2Code": "BR",
    "alpha3Code": "BRA",
    "capital": "Brasília",
    "region": "Americas",
    "subregion": "South America",
    "population": 212559409,
    "area": 8515767,
    "latlng": [
      -10,
      -55
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/br.png",
      "svg": "https://flagcdn.com/br.svg"
    },
    "currencies": [
      {
        "code": "BRL",
        "name": "Brazilian real",
        "symbol": "R$"
      }
    ]
  },
  {
    "name": "British Indian Ocean Territory",
    "alpha2Code": "IO",
    "alpha3Code": "IOT",
    "capital": "Diego Garcia",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 3000,
    "area": 60,
    "latlng": [
      -6,
      71.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/io.png",
      "svg": "https://flagcdn.com/io.svg"
    },
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Brunei Darussalam",
    "alpha2Code": "BN",
    "alpha3Code": "BRN",
    "capital": "Bandar Seri Begawan",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 437483,
    "area": 5765,
    "latlng": [
      4.5,
      114.66666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bn.png",
      "svg": "https://flagcdn.com/bn.svg"
    },
    "currencies": [
      {
        "code": "BND",
        "name": "Brunei dollar",
        "symbol": "$"
      },
      {
        "code": "SGD",
        "name": "Singapore dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Bulgaria",
    "alpha2Code": "BG",
    "alpha3Code": "BGR",
    "capital": "Sofia",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "population": 6927288,
    "area": 110879,
    "latlng": [
      43,
      25
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bg.png",
      "svg": "https://flagcdn.com/bg.svg"
    },
    "currencies": [
      {
        "code": "BGN",
        "name": "Bulgarian lev",
        "symbol": "лв"
      }
    ]
  },
  {
    "name": "Burkina Faso",
    "alpha2Code": "BF",
    "alpha3Code": "BFA",
    "capital": "Ouagadougou",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 20903278,
    "area": 272967,
    "latlng": [
      13,
      -2
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bf.png",
      "svg": "https://flagcdn.com/bf.svg"
    },
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Burundi",
    "alpha2Code": "BI",
    "alpha3Code": "BDI",
    "capital": "Gitega",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 11890781,
    "area": 27834,
    "latlng": [
      -3.5,
      30
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bi.png",
      "svg": "https://flagcdn.com/bi.svg"
    },
    "currencies": [
      {
        "code": "BIF",
        "name": "Burundian franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Cabo Verde",
    "alpha2Code": "CV",
    "alpha3Code": "CPV",
    "capital": "Praia",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 555988,
    "area": 4033,
    "latlng": [
      16,
      -24
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cv.png",
      "svg": "https://flagcdn.com/cv.svg"
    },
    "currencies": [
      {
        "code": "CVE",
        "name": "Cape Verdean escudo",
        "symbol": "Esc"
      }
    ]
  },
  {
    "name": "Cambodia",
    "alpha2Code": "KH",
    "alpha3Code": "KHM",
    "capital": "Phnom Penh",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 16718971,
    "area": 181035,
    "latlng": [
      13,
      105
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/kh.png",
      "svg": "https://flagcdn.com/kh.svg"
    },
    "currencies": [
      {
        "code": "KHR",
        "name": "Cambodian riel",
        "symbol": "៛"
      },
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Cameroon",
    "alpha2Code": "CM",
    "alpha3Code": "CMR",
    "capital": "Yaoundé",
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 26545864,
    "area": 475442,
    "latlng": [
      6,
      12
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cm.png",
      "svg": "https://flagcdn.com/cm.svg"
    },
    "currencies": [
      {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Canada",
    "alpha2Code": "CA",
    "alpha3Code": "CAN",
    "capital": "Ottawa",
    "region": "Americas",
    "subregion": "Northern America",
    "population": 38005238,
    "area": 9984670,
    "latlng": [
      60,
      -95
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ca.png",
      "svg": "https://flagcdn.com/ca.svg"
    },
    "currencies": [
      {
        "code": "CAD",
        "name": "Canadian dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Cayman Islands",
    "alpha2Code": "KY",
    "alpha3Code": "CYM",
    "capital": "George Town",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 65720,
    "area": 264,
    "latlng": [
      19.5,
      -80.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ky.png",
      "svg": "https://flagcdn.com/ky.svg"
    },
    "currencies": [
      {
        "code": "KYD",
        "name": "Cayman Islands dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Central African Republic",
    "alpha2Code": "CF",
    "alpha3Code": "CAF",
    "capital": "Bangui",
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 4829764,
    "area": 622984,
    "latlng": [
      7,
      21
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cf.png",
      "svg": "https://flagcdn.com/cf.svg"
    },
    "currencies": [
      {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Chad",
    "alpha2Code": "TD",
    "alpha3Code": "TCD",
    "capital": "N'Djamena",
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 16425859,
    "area": 1284000,
    "latlng": [
      15,
      19
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/td.png",
      "svg": "https://flagcdn.com/td.svg"
    },
    "currencies": [
      {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Chile",
    "alpha2Code": "CL",
    "alpha3Code": "CHL",
    "capital": "Santiago",
    "region": "Americas",
    "subregion": "South America",
    "population": 19116209,
    "area": 756102,
    "latlng": [
      -30,
      -71
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cl.png",
      "svg": "https://flagcdn.com/cl.svg"
    },
    "currencies": [
      {
        "code": "CLP",
        "name": "Chilean peso",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "China",
    "alpha2Code": "CN",
    "alpha3Code": "CHN",
    "capital": "Beijing",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 1402112000,
    "area": 9640011,
    "latlng": [
      35,
      105
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cn.png",
      "svg": "https://flagcdn.com/cn.svg"
    },
    "currencies": [
      {
        "code": "CNY",
        "name": "Chinese yuan",
        "symbol": "¥"
      }
    ]
  },
  {
    "name": "Christmas Island",
    "alpha2Code": "CX",
    "alpha3Code": "CXR",
    "capital": "Flying Fish Cove",
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "population": 2072,
    "area": 135,
    "latlng": [
      -10.5,
      105.66666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cx.png",
      "svg": "https://flagcdn.com/cx.svg"
    },
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Cocos (Keeling) Islands",
    "alpha2Code": "CC",
    "alpha3Code": "CCK",
    "capital": "West Island",
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "population": 550,
    "area": 14,
    "latlng": [
      -12.5,
      96.83333333
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cc.png",
      "svg": "https://flagcdn.com/cc.svg"
    },
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Colombia",
    "alpha2Code": "CO",
    "alpha3Code": "COL",
    "capital": "Bogotá",
    "region": "Americas",
    "subregion": "South America",
    "population": 50882884,
    "area": 1141748,
    "latlng": [
      4,
      -72
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/co.png",
      "svg": "https://flagcdn.com/co.svg"
    },
    "currencies": [
      {
        "code": "COP",
        "name": "Colombian peso",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Comoros",
    "alpha2Code": "KM",
    "alpha3Code": "COM",
    "capital": "Moroni",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 869595,
    "area": 1862,
    "latlng": [
      -12.16666666,
      44.25
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/km.png",
      "svg": "https://flagcdn.com/km.svg"
    },
    "currencies": [
      {
        "code": "KMF",
        "name": "Comorian franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Congo",
    "alpha2Code": "CG",
    "alpha3Code": "COG",
    "capital": "Brazzaville",
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 5518092,
    "area": 342000,
    "latlng": [
      -1,
      15
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cg.png",
      "svg": "https://flagcdn.com/cg.svg"
    },
    "currencies": [
      {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Congo (Democratic Republic of the)",
    "alpha2Code": "CD",
    "alpha3Code": "COD",
    "capital": "Kinshasa",
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 89561404,
    "area": 2344858,
    "latlng": [
      0,
      25
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cd.png",
      "svg": "https://flagcdn.com/cd.svg"
    },
    "currencies": [
      {
        "code": "CDF",
        "name": "Congolese franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Cook Islands",
    "alpha2Code": "CK",
    "alpha3Code": "COK",
    "capital": "Avarua",
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 18100,
    "area": 236,
    "latlng": [
      -21.23333333,
      -159.76666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ck.png",
      "svg": "https://flagcdn.com/ck.svg"
    },
    "currencies": [
      {
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      },
      {
        "code": "CKD",
        "name": "Cook Islands dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Costa Rica",
    "alpha2Code": "CR",
    "alpha3Code": "CRI",
    "capital": "San José",
    "region": "Americas",
    "subregion": "Central America",
    "population": 5094114,
    "area": 51100,
    "latlng": [
      10,
      -84
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cr.png",
      "svg": "https://flagcdn.com/cr.svg"
    },
    "currencies": [
      {
        "code": "CRC",
        "name": "Costa Rican colón",
        "symbol": "₡"
      }
    ]
  },
  {
    "name": "Croatia",
    "alpha2Code": "HR",
    "alpha3Code": "HRV",
    "capital": "Zagreb",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 4047200,
    "area": 56594,
    "latlng": [
      45.16666666,
      15.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/hr.png",
      "svg": "https://flagcdn.com/hr.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Cuba",
    "alpha2Code": "CU",
    "alpha3Code": "CUB",
    "capital": "Havana",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 11326616,
    "area": 109884,
    "latlng": [
      21.5,
      -80
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cu.png",
      "svg": "https://flagcdn.com/cu.svg"
    },
    "currencies": [
      {
        "code": "CUC",
        "name": "Cuban convertible peso",
        "symbol": "$"
      },
      {
        "code": "CUP",
        "name": "Cuban peso",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Curaçao",
    "alpha2Code": "CW",
    "alpha3Code": "CUW",
    "capital": "Willemstad",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 155014,
    "area": 444,
    "latlng": [
      12.116667,
      -68.933333
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cw.png",
      "svg": "https://flagcdn.com/cw.svg"
    },
    "currencies": [
      {
        "code": "ANG",
        "name": "Netherlands Antillean guilder",
        "symbol": "ƒ"
      }
    ]
  },
  {
    "name": "Cyprus",
    "alpha2Code": "CY",
    "alpha3Code": "CYP",
    "capital": "Nicosia",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 1207361,
    "area": 9251,
    "latlng": [
      35,
      33
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cy.png",
      "svg": "https://flagcdn.com/cy.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Czech Republic",
    "alpha2Code": "CZ",
    "alpha3Code": "CZE",
    "capital": "Prague",
    "region": "Europe",
    "subregion": "Central Europe",
    "population": 10698896,
    "area": 78865,
    "latlng": [
      49.75,
      15.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/cz.png",
      "svg": "https://flagcdn.com/cz.svg"
    },
    "currencies": [
      {
        "code": "CZK",
        "name": "Czech koruna",
        "symbol": "Kč"
      }
    ]
  },
  {
    "name": "Denmark",
    "alpha2Code": "DK",
    "alpha3Code": "DNK",
    "capital": "Copenhagen",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 5831404,
    "area": 43094,
    "latlng": [
      56,
      10
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/dk.png",
      "svg": "https://flagcdn.com/dk.svg"
    },
    "currencies": [
      {
        "code": "DKK",
        "name": "Danish krone",
        "symbol": "kr"
      }
    ]
  },
  {
    "name": "Djibouti",
    "alpha2Code": "DJ",
    "alpha3Code": "DJI",
    "capital": "Djibouti",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 988002,
    "area": 23200,
    "latlng": [
      11.5,
      43
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/dj.png",
      "svg": "https://flagcdn.com/dj.svg"
    },
    "currencies": [
      {
        "code": "DJF",
        "name": "Djiboutian franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Dominica",
    "alpha2Code": "DM",
    "alpha3Code": "DMA",
    "capital": "Roseau",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 71991,
    "area": 751,
    "latlng": [
      15.41666666,
      -61.33333333
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/dm.png",
      "svg": "https://flagcdn.com/dm.svg"
    },
    "currencies": [
      {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Dominican Republic",
    "alpha2Code": "DO",
    "alpha3Code": "DOM",
    "capital": "Santo Domingo",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 10847904,
    "area": 48671,
    "latlng": [
      19,
      -70.66666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/do.png",
      "svg": "https://flagcdn.com/do.svg"
    },
    "currencies": [
      {
        "code": "DOP",
        "name": "Dominican peso",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Ecuador",
    "alpha2Code": "EC",
    "alpha3Code": "ECU",
    "capital": "Quito",
    "region": "Americas",
    "subregion": "South America",
    "population": 17643060,
    "area": 276841,
    "latlng": [
      -2,
      -77.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ec.png",
      "svg": "https://flagcdn.com/ec.svg"
    },
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Egypt",
    "alpha2Code": "EG",
    "alpha3Code": "EGY",
    "capital": "Cairo",
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 102334403,
    "area": 1002450,
    "latlng": [
      27,
      30
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/eg.png",
      "svg": "https://flagcdn.com/eg.svg"
    },
    "currencies": [
      {
        "code": "EGP",
        "name": "Egyptian pound",
        "symbol": "£"
      }
    ]
  },
  {
    "name": "El Salvador",
    "alpha2Code": "SV",
    "alpha3Code": "SLV",
    "capital": "San Salvador",
    "region": "Americas",
    "subregion": "Central America",
    "population": 6486201,
    "area": 21041,
    "latlng": [
      13.83333333,
      -88.91666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sv.png",
      "svg": "https://flagcdn.com/sv.svg"
    },
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Equatorial Guinea",
    "alpha2Code": "GQ",
    "alpha3Code": "GNQ",
    "capital": "Malabo",
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 1402985,
    "area": 28051,
    "latlng": [
      2,
      10
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gq.png",
      "svg": "https://flagcdn.com/gq.svg"
    },
    "currencies": [
      {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Eritrea",
    "alpha2Code": "ER",
    "alpha3Code": "ERI",
    "capital": "Asmara",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 5352000,
    "area": 117600,
    "latlng": [
      15,
      39
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/er.png",
      "svg": "https://flagcdn.com/er.svg"
    },
    "currencies": [
      {
        "code": "ERN",
        "name": "Eritrean nakfa",
        "symbol": "Nfk"
      }
    ]
  },
  {
    "name": "Estonia",
    "alpha2Code": "EE",
    "alpha3Code": "EST",
    "capital": "Tallinn",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 1331057,
    "area": 45227,
    "latlng": [
      59,
      26
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ee.png",
      "svg": "https://flagcdn.com/ee.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Ethiopia",
    "alpha2Code": "ET",
    "alpha3Code": "ETH",
    "capital": "Addis Ababa",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 114963583,
    "area": 1104300,
    "latlng": [
      8,
      38
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/et.png",
      "svg": "https://flagcdn.com/et.svg"
    },
    "currencies": [
      {
        "code": "ETB",
        "name": "Ethiopian birr",
        "symbol": "Br"
      }
    ]
  },
  {
    "name": "Falkland Islands (Malvinas)",
    "alpha2Code": "FK",
    "alpha3Code": "FLK",
    "capital": "Stanley",
    "region": "Americas",
    "subregion": "South America",
    "population": 2563,
    "area": 12173,
    "latlng": [
      -51.75,
      -59
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/fk.png",
      "svg": "https://flagcdn.com/fk.svg"
    },
    "currencies": [
      {
        "code": "FKP",
        "name": "Falkland Islands pound",
        "symbol": "£"
      }
    ]
  },
  {
    "name": "Faroe Islands",
    "alpha2Code": "FO",
    "alpha3Code": "FRO",
    "capital": "Tórshavn",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 48865,
    "area": 1393,
    "latlng": [
      62,
      -7
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/fo.png",
      "svg": "https://flagcdn.com/fo.svg"
    },
    "currencies": [
      {
        "code": "DKK",
        "name": "Danish krone",
        "symbol": "kr"
      },
      {
        "code": "FOK",
        "name": "Faroese króna",
        "symbol": "kr"
      }
    ]
  },
  {
    "name": "Fiji",
    "alpha2Code": "FJ",
    "alpha3Code": "FJI",
    "capital": "Suva",
    "region": "Oceania",
    "subregion": "Melanesia",
    "population": 896444,
    "area": 18272,
    "latlng": [
      -18,
      175
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/fj.png",
      "svg": "https://flagcdn.com/fj.svg"
    },
    "currencies": [
      {
        "code": "FJD",
        "name": "Fijian dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Finland",
    "alpha2Code": "FI",
    "alpha3Code": "FIN",
    "capital": "Helsinki",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 5530719,
    "area": 338424,
    "latlng": [
      64,
      26
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/fi.png",
      "svg": "https://flagcdn.com/fi.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "France",
    "alpha2Code": "FR",
    "alpha3Code": "FRA",
    "capital": "Paris",
    "region": "Europe",
    "subregion": "Western Europe",
    "population": 67391582,
    "area": 640679,
    "latlng": [
      46,
      2
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/fr.png",
      "svg": "https://flagcdn.com/fr.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "French Guiana",
    "alpha2Code": "GF",
    "alpha3Code": "GUF",
    "capital": "Cayenne",
    "region": "Americas",
    "subregion": "South America",
    "population": 254541,
    "latlng": [
      4,
      -53
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gf.png",
      "svg": "https://flagcdn.com/gf.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "French Polynesia",
    "alpha2Code": "PF",
    "alpha3Code": "PYF",
    "capital": "Papeetē",
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 280904,
    "area": 4167,
    "latlng": [
      -15,
      -140
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pf.png",
      "svg": "https://flagcdn.com/pf.svg"
    },
    "currencies": [
      {
        "code": "XPF",
        "name": "CFP franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "French Southern Territories",
    "alpha2Code": "TF",
    "alpha3Code": "ATF",
    "capital": "Port-aux-Français",
    "region": "Africa",
    "subregion": "Southern Africa",
    "population": 140,
    "area": 7747,
    "latlng": [
      -49.25,
      69.167
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tf.png",
      "svg": "https://flagcdn.com/tf.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Gabon",
    "alpha2Code": "GA",
    "alpha3Code": "GAB",
    "capital": "Libreville",
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 2225728,
    "area": 267668,
    "latlng": [
      -1,
      11.75
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ga.png",
      "svg": "https://flagcdn.com/ga.svg"
    },
    "currencies": [
      {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Gambia",
    "alpha2Code": "GM",
    "alpha3Code": "GMB",
    "capital": "Banjul",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 2416664,
    "area": 11295,
    "latlng": [
      13.46666666,
      -16.56666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gm.png",
      "svg": "https://flagcdn.com/gm.svg"
    },
    "currencies": [
      {
        "code": "GMD",
        "name": "Gambian dalasi",
        "symbol": "D"
      }
    ]
  },
  {
    "name": "Georgia",
    "alpha2Code": "GE",
    "alpha3Code": "GEO",
    "capital": "Tbilisi",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 3714000,
    "area": 69700,
    "latlng": [
      42,
      43.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ge.png",
      "svg": "https://flagcdn.com/ge.svg"
    },
    "currencies": [
      {
        "code": "GEL",
        "name": "Georgian Lari",
        "symbol": "ლ"
      }
    ]
  },
  {
    "name": "Germany",
    "alpha2Code": "DE",
    "alpha3Code": "DEU",
    "capital": "Berlin",
    "region": "Europe",
    "subregion": "Central Europe",
    "population": 83240525,
    "area": 357114,
    "latlng": [
      51,
      9
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/de.png",
      "svg": "https://flagcdn.com/de.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Ghana",
    "alpha2Code": "GH",
    "alpha3Code": "GHA",
    "capital": "Accra",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 31072945,
    "area": 238533,
    "latlng": [
      8,
      -2
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gh.png",
      "svg": "https://flagcdn.com/gh.svg"
    },
    "currencies": [
      {
        "code": "GHS",
        "name": "Ghanaian cedi",
        "symbol": "₵"
      }
    ]
  },
  {
    "name": "Gibraltar",
    "alpha2Code": "GI",
    "alpha3Code": "GIB",
    "capital": "Gibraltar",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 33691,
    "area": 6,
    "latlng": [
      36.13333333,
      -5.35
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gi.png",
      "svg": "https://flagcdn.com/gi.svg"
    },
    "currencies": [
      {
        "code": "GIP",
        "name": "Gibraltar pound",
        "symbol": "£"
      }
    ]
  },
  {
    "name": "Greece",
    "alpha2Code": "GR",
    "alpha3Code": "GRC",
    "capital": "Athens",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 10715549,
    "area": 131990,
    "latlng": [
      39,
      22
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gr.png",
      "svg": "https://flagcdn.com/gr.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Greenland",
    "alpha2Code": "GL",
    "alpha3Code": "GRL",
    "capital": "Nuuk",
    "region": "Americas",
    "subregion": "Northern America",
    "population": 56367,
    "area": 2166086,
    "latlng": [
      72,
      -40
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gl.png",
      "svg": "https://flagcdn.com/gl.svg"
    },
    "currencies": [
      {
        "code": "DKK",
        "name": "Danish krone",
        "symbol": "kr"
      }
    ]
  },
  {
    "name": "Grenada",
    "alpha2Code": "GD",
    "alpha3Code": "GRD",
    "capital": "St. George's",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 112519,
    "area": 344,
    "latlng": [
      12.11666666,
      -61.66666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gd.png",
      "svg": "https://flagcdn.com/gd.svg"
    },
    "currencies": [
      {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Guadeloupe",
    "alpha2Code": "GP",
    "alpha3Code": "GLP",
    "capital": "Basse-Terre",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 400132,
    "latlng": [
      16.25,
      -61.583333
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gp.png",
      "svg": "https://flagcdn.com/gp.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Guam",
    "alpha2Code": "GU",
    "alpha3Code": "GUM",
    "capital": "Hagåtña",
    "region": "Oceania",
    "subregion": "Micronesia",
    "population": 168783,
    "area": 549,
    "latlng": [
      13.46666666,
      144.78333333
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gu.png",
      "svg": "https://flagcdn.com/gu.svg"
    },
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Guatemala",
    "alpha2Code": "GT",
    "alpha3Code": "GTM",
    "capital": "Guatemala City",
    "region": "Americas",
    "subregion": "Central America",
    "population": 16858333,
    "area": 108889,
    "latlng": [
      15.5,
      -90.25
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gt.png",
      "svg": "https://flagcdn.com/gt.svg"
    },
    "currencies": [
      {
        "code": "GTQ",
        "name": "Guatemalan quetzal",
        "symbol": "Q"
      }
    ]
  },
  {
    "name": "Guernsey",
    "alpha2Code": "GG",
    "alpha3Code": "GGY",
    "capital": "St. Peter Port",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 62999,
    "area": 78,
    "latlng": [
      49.46666666,
      -2.58333333
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gg.png",
      "svg": "https://flagcdn.com/gg.svg"
    },
    "currencies": [
      {
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      },
      {
        "code": "GGP",
        "name": "Guernsey pound",
        "symbol": "£"
      }
    ]
  },
  {
    "name": "Guinea",
    "alpha2Code": "GN",
    "alpha3Code": "GIN",
    "capital": "Conakry",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 13132792,
    "area": 245857,
    "latlng": [
      11,
      -10
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gn.png",
      "svg": "https://flagcdn.com/gn.svg"
    },
    "currencies": [
      {
        "code": "GNF",
        "name": "Guinean franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Guinea-Bissau",
    "alpha2Code": "GW",
    "alpha3Code": "GNB",
    "capital": "Bissau",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 1967998,
    "area": 36125,
    "latlng": [
      12,
      -15
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gw.png",
      "svg": "https://flagcdn.com/gw.svg"
    },
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Guyana",
    "alpha2Code": "GY",
    "alpha3Code": "GUY",
    "capital": "Georgetown",
    "region": "Americas",
    "subregion": "South America",
    "population": 786559,
    "area": 214969,
    "latlng": [
      5,
      -59
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gy.png",
      "svg": "https://flagcdn.com/gy.svg"
    },
    "currencies": [
      {
        "code": "GYD",
        "name": "Guyanese dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Haiti",
    "alpha2Code": "HT",
    "alpha3Code": "HTI",
    "capital": "Port-au-Prince",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 11402533,
    "area": 27750,
    "latlng": [
      19,
      -72.41666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ht.png",
      "svg": "https://flagcdn.com/ht.svg"
    },
    "currencies": [
      {
        "code": "HTG",
        "name": "Haitian gourde",
        "symbol": "G"
      }
    ]
  },
  {
    "name": "Heard Island and McDonald Islands",
    "alpha2Code": "HM",
    "alpha3Code": "HMD",
    "capital": "",
    "region": "Antarctic",
    "subregion": "Antarctic",
    "population": 0,
    "area": 412,
    "latlng": [
      -53.1,
      72.51666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/hm.png",
      "svg": "https://flagcdn.com/hm.svg"
    },
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Honduras",
    "alpha2Code": "HN",
    "alpha3Code": "HND",
    "capital": "Tegucigalpa",
    "region": "Americas",
    "subregion": "Central America",
    "population": 9904608,
    "area": 112492,
    "latlng": [
      15,
      -86.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/hn.png",
      "svg": "https://flagcdn.com/hn.svg"
    },
    "currencies": [
      {
        "code": "HNL",
        "name": "Honduran lempira",
        "symbol": "L"
      }
    ]
  },
  {
    "name": "Hong Kong",
    "alpha2Code": "HK",
    "alpha3Code": "HKG",
    "capital": "City of Victoria",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 7481800,
    "area": 1104,
    "latlng": [
      22.25,
      114.16666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/hk.png",
      "svg": "https://flagcdn.com/hk.svg"
    },
    "currencies": [
      {
        "code": "HKD",
        "name": "Hong Kong dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Hungary",
    "alpha2Code": "HU",
    "alpha3Code": "HUN",
    "capital": "Budapest",
    "region": "Europe",
    "subregion": "Central Europe",
    "population": 9749763,
    "area": 93028,
    "latlng": [
      47,
      20
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/hu.png",
      "svg": "https://flagcdn.com/hu.svg"
    },
    "currencies": [
      {
        "code": "HUF",
        "name": "Hungarian forint",
        "symbol": "Ft"
      }
    ]
  },
  {
    "name": "Iceland",
    "alpha2Code": "IS",
    "alpha3Code": "ISL",
    "capital": "Reykjavík",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 366425,
    "area": 103000,
    "latlng": [
      65,
      -18
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/is.png",
      "svg": "https://flagcdn.com/is.svg"
    },
    "currencies": [
      {
        "code": "ISK",
        "name": "Icelandic króna",
        "symbol": "kr"
      }
    ]
  },
  {
    "name": "India",
    "alpha2Code": "IN",
    "alpha3Code": "IND",
    "capital": "New Delhi",
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 1380004385,
    "area": 3287590,
    "latlng": [
      20,
      77
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/in.png",
      "svg": "https://flagcdn.com/in.svg"
    },
    "currencies": [
      {
        "code": "INR",
        "name": "Indian rupee",
        "symbol": "₹"
      }
    ]
  },
  {
    "name": "Indonesia",
    "alpha2Code": "ID",
    "alpha3Code": "IDN",
    "capital": "Jakarta",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 273523621,
    "area": 1904569,
    "latlng": [
      -5,
      120
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/id.png",
      "svg": "https://flagcdn.com/id.svg"
    },
    "currencies": [
      {
        "code": "IDR",
        "name": "Indonesian rupiah",
        "symbol": "Rp"
      }
    ]
  },
  {
    "name": "Iran (Islamic Republic of)",
    "alpha2Code": "IR",
    "alpha3Code": "IRN",
    "capital": "Tehran",
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 83992953,
    "area": 1648195,
    "latlng": [
      32,
      53
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ir.png",
      "svg": "https://flagcdn.com/ir.svg"
    },
    "currencies": [
      {
        "code": "IRR",
        "name": "Iranian rial",
        "symbol": "﷼"
      }
    ]
  },
  {
    "name": "Iraq",
    "alpha2Code": "IQ",
    "alpha3Code": "IRQ",
    "capital": "Baghdad",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 40222503,
    "area": 438317,
    "latlng": [
      33,
      44
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/iq.png",
      "svg": "https://flagcdn.com/iq.svg"
    },
    "currencies": [
      {
        "code": "IQD",
        "name": "Iraqi dinar",
        "symbol": "ع.د"
      }
    ]
  },
  {
    "name": "Ireland",
    "alpha2Code": "IE",
    "alpha3Code": "IRL",
    "capital": "Dublin",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 4994724,
    "area": 70273,
    "latlng": [
      53,
      -8
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ie.png",
      "svg": "https://flagcdn.com/ie.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Isle of Man",
    "alpha2Code": "IM",
    "alpha3Code": "IMN",
    "capital": "Douglas",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 85032,
    "area": 572,
    "latlng": [
      54.25,
      -4.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/im.png",
      "svg": "https://flagcdn.com/im.svg"
    },
    "currencies": [
      {
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      },
      {
        "code": "IMP[G]",
        "name": "Manx pound",
        "symbol": "£"
      }
    ]
  },
  {
    "name": "Israel",
    "alpha2Code": "IL",
    "alpha3Code": "ISR",
    "capital": "Jerusalem",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 9216900,
    "area": 20770,
    "latlng": [
      31.5,
      34.75
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/il.png",
      "svg": "https://flagcdn.com/il.svg"
    },
    "currencies": [
      {
        "code": "ILS",
        "name": "Israeli new shekel",
        "symbol": "₪"
      }
    ]
  },
  {
    "name": "Italy",
    "alpha2Code": "IT",
    "alpha3Code": "ITA",
    "capital": "Rome",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 59554023,
    "area": 301336,
    "latlng": [
      42.83333333,
      12.83333333
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/it.png",
      "svg": "https://flagcdn.com/it.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Ivory Coast",
    "alpha2Code": "CI",
    "alpha3Code": "CIV",
    "capital": "Yamoussoukro",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 26378275,
    "area": 322463,
    "latlng": [
      8,
      -5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ci.png",
      "svg": "https://flagcdn.com/ci.svg"
    },
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Jamaica",
    "alpha2Code": "JM",
    "alpha3Code": "JAM",
    "capital": "Kingston",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 2961161,
    "area": 10991,
    "latlng": [
      18.25,
      -77.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/jm.png",
      "svg": "https://flagcdn.com/jm.svg"
    },
    "currencies": [
      {
        "code": "JMD",
        "name": "Jamaican dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Japan",
    "alpha2Code": "JP",
    "alpha3Code": "JPN",
    "capital": "Tokyo",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 125836021,
    "area": 377930,
    "latlng": [
      36,
      138
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/jp.png",
      "svg": "https://flagcdn.com/jp.svg"
    },
    "currencies": [
      {
        "code": "JPY",
        "name": "Japanese yen",
        "symbol": "¥"
      }
    ]
  },
  {
    "name": "Jersey",
    "alpha2Code": "JE",
    "alpha3Code": "JEY",
    "capital": "Saint Helier",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 100800,
    "area": 116,
    "latlng": [
      49.25,
      -2.16666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/je.png",
      "svg": "https://flagcdn.com/je.svg"
    },
    "currencies": [
      {
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      },
      {
        "code": "JEP[G]",
        "name": "Jersey pound",
        "symbol": "£"
      }
    ]
  },
  {
    "name": "Jordan",
    "alpha2Code": "JO",
    "alpha3Code": "JOR",
    "capital": "Amman",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 10203140,
    "area": 89342,
    "latlng": [
      31,
      36
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/jo.png",
      "svg": "https://flagcdn.com/jo.svg"
    },
    "currencies": [
      {
        "code": "JOD",
        "name": "Jordanian dinar",
        "symbol": "د.ا"
      }
    ]
  },
  {
    "name": "Kazakhstan",
    "alpha2Code": "KZ",
    "alpha3Code": "KAZ",
    "capital": "Nur-Sultan",
    "region": "Asia",
    "subregion": "Central Asia",
    "population": 18754440,
    "area": 2724900,
    "latlng": [
      48,
      68
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/kz.png",
      "svg": "https://flagcdn.com/kz.svg"
    },
    "currencies": [
      {
        "code": "KZT",
        "name": "Kazakhstani tenge",
        "symbol": "₸"
      }
    ]
  },
  {
    "name": "Kenya",
    "alpha2Code": "KE",
    "alpha3Code": "KEN",
    "capital": "Nairobi",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 53771300,
    "area": 580367,
    "latlng": [
      1,
      38
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ke.png",
      "svg": "https://flagcdn.com/ke.svg"
    },
    "currencies": [
      {
        "code": "KES",
        "name": "Kenyan shilling",
        "symbol": "Sh"
      }
    ]
  },
  {
    "name": "Kiribati",
    "alpha2Code": "KI",
    "alpha3Code": "KIR",
    "capital": "South Tarawa",
    "region": "Oceania",
    "subregion": "Micronesia",
    "population": 119446,
    "area": 811,
    "latlng": [
      1.41666666,
      173
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ki.png",
      "svg": "https://flagcdn.com/ki.svg"
    },
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      },
      {
        "code": "KID",
        "name": "Kiribati dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Korea (Democratic People's Republic of)",
    "alpha2Code": "KP",
    "alpha3Code": "PRK",
    "capital": "Pyongyang",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 25778815,
    "area": 120538,
    "latlng": [
      40,
      127
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/kp.png",
      "svg": "https://flagcdn.com/kp.svg"
    },
    "currencies": [
      {
        "code": "KPW",
        "name": "North Korean won",
        "symbol": "₩"
      }
    ]
  },
  {
    "name": "Korea (Republic of)",
    "alpha2Code": "KR",
    "alpha3Code": "KOR",
    "capital": "Seoul",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 51780579,
    "area": 100210,
    "latlng": [
      37,
      127.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/kr.png",
      "svg": "https://flagcdn.com/kr.svg"
    },
    "currencies": [
      {
        "code": "KRW",
        "name": "South Korean won",
        "symbol": "₩"
      }
    ]
  },
  {
    "name": "Kuwait",
    "alpha2Code": "KW",
    "alpha3Code": "KWT",
    "capital": "Kuwait City",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 4270563,
    "area": 17818,
    "latlng": [
      29.5,
      45.75
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/kw.png",
      "svg": "https://flagcdn.com/kw.svg"
    },
    "currencies": [
      {
        "code": "KWD",
        "name": "Kuwaiti dinar",
        "symbol": "د.ك"
      }
    ]
  },
  {
    "name": "Kyrgyzstan",
    "alpha2Code": "KG",
    "alpha3Code": "KGZ",
    "capital": "Bishkek",
    "region": "Asia",
    "subregion": "Central Asia",
    "population": 6591600,
    "area": 199951,
    "latlng": [
      41,
      75
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/kg.png",
      "svg": "https://flagcdn.com/kg.svg"
    },
    "currencies": [
      {
        "code": "KGS",
        "name": "Kyrgyzstani som",
        "symbol": "с"
      }
    ]
  },
  {
    "name": "Lao People's Democratic Republic",
    "alpha2Code": "LA",
    "alpha3Code": "LAO",
    "capital": "Vientiane",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 7275556,
    "area": 236800,
    "latlng": [
      18,
      105
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/la.png",
      "svg": "https://flagcdn.com/la.svg"
    },
    "currencies": [
      {
        "code": "LAK",
        "name": "Lao kip",
        "symbol": "₭"
      }
    ]
  },
  {
    "name": "Latvia",
    "alpha2Code": "LV",
    "alpha3Code": "LVA",
    "capital": "Riga",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 1901548,
    "area": 64559,
    "latlng": [
      57,
      25
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/lv.png",
      "svg": "https://flagcdn.com/lv.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Lebanon",
    "alpha2Code": "LB",
    "alpha3Code": "LBN",
    "capital": "Beirut",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 6825442,
    "area": 10452,
    "latlng": [
      33.83333333,
      35.83333333
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/lb.png",
      "svg": "https://flagcdn.com/lb.svg"
    },
    "currencies": [
      {
        "code": "LBP",
        "name": "Lebanese pound",
        "symbol": "ل.ل"
      }
    ]
  },
  {
    "name": "Lesotho",
    "alpha2Code": "LS",
    "alpha3Code": "LSO",
    "capital": "Maseru",
    "region": "Africa",
    "subregion": "Southern Africa",
    "population": 2142252,
    "area": 30355,
    "latlng": [
      -29.5,
      28.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ls.png",
      "svg": "https://flagcdn.com/ls.svg"
    },
    "currencies": [
      {
        "code": "LSL",
        "name": "Lesotho loti",
        "symbol": "L"
      },
      {
        "code": "ZAR",
        "name": "South African rand",
        "symbol": "R"
      }
    ]
  },
  {
    "name": "Liberia",
    "alpha2Code": "LR",
    "alpha3Code": "LBR",
    "capital": "Monrovia",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 5057677,
    "area": 111369,
    "latlng": [
      6.5,
      -9.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/lr.png",
      "svg": "https://flagcdn.com/lr.svg"
    },
    "currencies": [
      {
        "code": "LRD",
        "name": "Liberian dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Libya",
    "alpha2Code": "LY",
    "alpha3Code": "LBY",
    "capital": "Tripoli",
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 6871287,
    "area": 1759540,
    "latlng": [
      25,
      17
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ly.png",
      "svg": "https://flagcdn.com/ly.svg"
    },
    "currencies": [
      {
        "code": "LYD",
        "name": "Libyan dinar",
        "symbol": "ل.د"
      }
    ]
  },
  {
    "name": "Liechtenstein",
    "alpha2Code": "LI",
    "alpha3Code": "LIE",
    "capital": "Vaduz",
    "region": "Europe",
    "subregion": "Central Europe",
    "population": 38137,
    "area": 160,
    "latlng": [
      47.26666666,
      9.53333333
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/li.png",
      "svg": "https://flagcdn.com/li.svg"
    },
    "currencies": [
      {
        "code": "CHF",
        "name": "Swiss franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Lithuania",
    "alpha2Code": "LT",
    "alpha3Code": "LTU",
    "capital": "Vilnius",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 2794700,
    "area": 65300,
    "latlng": [
      56,
      24
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/lt.png",
      "svg": "https://flagcdn.com/lt.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Luxembourg",
    "alpha2Code": "LU",
    "alpha3Code": "LUX",
    "capital": "Luxembourg",
    "region": "Europe",
    "subregion": "Western Europe",
    "population": 632275,
    "area": 2586,
    "latlng": [
      49.75,
      6.16666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/lu.png",
      "svg": "https://flagcdn.com/lu.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Macao",
    "alpha2Code": "MO",
    "alpha3Code": "MAC",
    "capital": "",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 649342,
    "area": 30,
    "latlng": [
      22.16666666,
      113.55
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mo.png",
      "svg": "https://flagcdn.com/mo.svg"
    },
    "currencies": [
      {
        "code": "MOP",
        "name": "Macanese pataca",
        "symbol": "P"
      }
    ]
  },
  {
    "name": "Madagascar",
    "alpha2Code": "MG",
    "alpha3Code": "MDG",
    "capital": "Antananarivo",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 27691019,
    "area": 587041,
    "latlng": [
      -20,
      47
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mg.png",
      "svg": "https://flagcdn.com/mg.svg"
    },
    "currencies": [
      {
        "code": "MGA",
        "name": "Malagasy ariary",
        "symbol": "Ar"
      }
    ]
  },
  {
    "name": "Malawi",
    "alpha2Code": "MW",
    "alpha3Code": "MWI",
    "capital": "Lilongwe",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 19129955,
    "area": 118484,
    "latlng": [
      -13.5,
      34
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mw.png",
      "svg": "https://flagcdn.com/mw.svg"
    },
    "currencies": [
      {
        "code": "MWK",
        "name": "Malawian kwacha",
        "symbol": "MK"
      }
    ]
  },
  {
    "name": "Malaysia",
    "alpha2Code": "MY",
    "alpha3Code": "MYS",
    "capital": "Kuala Lumpur",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 32365998,
    "area": 330803,
    "latlng": [
      2.5,
      112.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/my.png",
      "svg": "https://flagcdn.com/my.svg"
    },
    "currencies": [
      {
        "code": "MYR",
        "name": "Malaysian ringgit",
        "symbol": "RM"
      }
    ]
  },
  {
    "name": "Maldives",
    "alpha2Code": "MV",
    "alpha3Code": "MDV",
    "capital": "Malé",
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 540542,
    "area": 300,
    "latlng": [
      3.25,
      73
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mv.png",
      "svg": "https://flagcdn.com/mv.svg"
    },
    "currencies": [
      {
        "code": "MVR",
        "name": "Maldivian rufiyaa",
        "symbol": ".ރ"
      }
    ]
  },
  {
    "name": "Mali",
    "alpha2Code": "ML",
    "alpha3Code": "MLI",
    "capital": "Bamako",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 20250834,
    "area": 1240192,
    "latlng": [
      17,
      -4
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ml.png",
      "svg": "https://flagcdn.com/ml.svg"
    },
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Malta",
    "alpha2Code": "MT",
    "alpha3Code": "MLT",
    "capital": "Valletta",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 525285,
    "area": 316,
    "latlng": [
      35.83333333,
      14.58333333
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mt.png",
      "svg": "https://flagcdn.com/mt.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Marshall Islands",
    "alpha2Code": "MH",
    "alpha3Code": "MHL",
    "capital": "Majuro",
    "region": "Oceania",
    "subregion": "Micronesia",
    "population": 59194,
    "area": 181,
    "latlng": [
      9,
      168
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mh.png",
      "svg": "https://flagcdn.com/mh.svg"
    },
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Martinique",
    "alpha2Code": "MQ",
    "alpha3Code": "MTQ",
    "capital": "Fort-de-France",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 378243,
    "latlng": [
      14.666667,
      -61
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mq.png",
      "svg": "https://flagcdn.com/mq.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Mauritania",
    "alpha2Code": "MR",
    "alpha3Code": "MRT",
    "capital": "Nouakchott",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 4649660,
    "area": 1030700,
    "latlng": [
      20,
      -12
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mr.png",
      "svg": "https://flagcdn.com/mr.svg"
    },
    "currencies": [
      {
        "code": "MRO",
        "name": "Mauritanian ouguiya",
        "symbol": "UM"
      }
    ]
  },
  {
    "name": "Mauritius",
    "alpha2Code": "MU",
    "alpha3Code": "MUS",
    "capital": "Port Louis",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 1265740,
    "area": 2040,
    "latlng": [
      -20.28333333,
      57.55
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mu.png",
      "svg": "https://flagcdn.com/mu.svg"
    },
    "currencies": [
      {
        "code": "MUR",
        "name": "Mauritian rupee",
        "symbol": "₨"
      }
    ]
  },
  {
    "name": "Mayotte",
    "alpha2Code": "YT",
    "alpha3Code": "MYT",
    "capital": "Mamoudzou",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 226915,
    "latlng": [
      -12.83333333,
      45.16666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/yt.png",
      "svg": "https://flagcdn.com/yt.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Mexico",
    "alpha2Code": "MX",
    "alpha3Code": "MEX",
    "capital": "Mexico City",
    "region": "Americas",
    "subregion": "North America",
    "population": 128932753,
    "area": 1964375,
    "latlng": [
      23,
      -102
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mx.png",
      "svg": "https://flagcdn.com/mx.svg"
    },
    "currencies": [
      {
        "code": "MXN",
        "name": "Mexican peso",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Micronesia (Federated States of)",
    "alpha2Code": "FM",
    "alpha3Code": "FSM",
    "capital": "Palikir",
    "region": "Oceania",
    "subregion": "Micronesia",
    "population": 115021,
    "area": 702,
    "latlng": [
      6.91666666,
      158.25
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/fm.png",
      "svg": "https://flagcdn.com/fm.svg"
    },
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Moldova (Republic of)",
    "alpha2Code": "MD",
    "alpha3Code": "MDA",
    "capital": "Chișinău",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "population": 2617820,
    "area": 33846,
    "latlng": [
      47,
      29
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/md.png",
      "svg": "https://flagcdn.com/md.svg"
    },
    "currencies": [
      {
        "code": "MDL",
        "name": "Moldovan leu",
        "symbol": "L"
      }
    ]
  },
  {
    "name": "Monaco",
    "alpha2Code": "MC",
    "alpha3Code": "MCO",
    "capital": "Monaco",
    "region": "Europe",
    "subregion": "Western Europe",
    "population": 39244,
    "area": 2.02,
    "latlng": [
      43.73333333,
      7.4
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mc.png",
      "svg": "https://flagcdn.com/mc.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Mongolia",
    "alpha2Code": "MN",
    "alpha3Code": "MNG",
    "capital": "Ulan Bator",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 3278292,
    "area": 1564110,
    "latlng": [
      46,
      105
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mn.png",
      "svg": "https://flagcdn.com/mn.svg"
    },
    "currencies": [
      {
        "code": "MNT",
        "name": "Mongolian tögrög",
        "symbol": "₮"
      }
    ]
  },
  {
    "name": "Montenegro",
    "alpha2Code": "ME",
    "alpha3Code": "MNE",
    "capital": "Podgorica",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 621718,
    "area": 13812,
    "latlng": [
      42.5,
      19.3
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/me.png",
      "svg": "https://flagcdn.com/me.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Montserrat",
    "alpha2Code": "MS",
    "alpha3Code": "MSR",
    "capital": "Plymouth",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 4922,
    "area": 102,
    "latlng": [
      16.75,
      -62.2
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ms.png",
      "svg": "https://flagcdn.com/ms.svg"
    },
    "currencies": [
      {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Morocco",
    "alpha2Code": "MA",
    "alpha3Code": "MAR",
    "capital": "Rabat",
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 36910558,
    "area": 446550,
    "latlng": [
      32,
      -5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ma.png",
      "svg": "https://flagcdn.com/ma.svg"
    },
    "currencies": [
      {
        "code": "MAD",
        "name": "Moroccan dirham",
        "symbol": "د.م."
      }
    ]
  },
  {
    "name": "Mozambique",
    "alpha2Code": "MZ",
    "alpha3Code": "MOZ",
    "capital": "Maputo",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 31255435,
    "area": 801590,
    "latlng": [
      -18.25,
      35
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mz.png",
      "svg": "https://flagcdn.com/mz.svg"
    },
    "currencies": [
      {
        "code": "MZN",
        "name": "Mozambican metical",
        "symbol": "MT"
      }
    ]
  },
  {
    "name": "Myanmar",
    "alpha2Code": "MM",
    "alpha3Code": "MMR",
    "capital": "Naypyidaw",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 54409794,
    "area": 676578,
    "latlng": [
      22,
      98
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mm.png",
      "svg": "https://flagcdn.com/mm.svg"
    },
    "currencies": [
      {
        "code": "MMK",
        "name": "Burmese kyat",
        "symbol": "Ks"
      }
    ]
  },
  {
    "name": "Namibia",
    "alpha2Code": "NA",
    "alpha3Code": "NAM",
    "capital": "Windhoek",
    "region": "Africa",
    "subregion": "Southern Africa",
    "population": 2540916,
    "area": 825615,
    "latlng": [
      -22,
      17
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/na.png",
      "svg": "https://flagcdn.com/na.svg"
    },
    "currencies": [
      {
        "code": "NAD",
        "name": "Namibian dollar",
        "symbol": "$"
      },
      {
        "code": "ZAR",
        "name": "South African rand",
        "symbol": "R"
      }
    ]
  },
  {
    "name": "Nauru",
    "alpha2Code": "NR",
    "alpha3Code": "NRU",
    "capital": "Yaren",
    "region": "Oceania",
    "subregion": "Micronesia",
    "population": 10834,
    "area": 21,
    "latlng": [
      -0.53333333,
      166.91666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/nr.png",
      "svg": "https://flagcdn.com/nr.svg"
    },
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Nepal",
    "alpha2Code": "NP",
    "alpha3Code": "NPL",
    "capital": "Kathmandu",
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 29136808,
    "area": 147181,
    "latlng": [
      28,
      84
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/np.png",
      "svg": "https://flagcdn.com/np.svg"
    },
    "currencies": [
      {
        "code": "NPR",
        "name": "Nepalese rupee",
        "symbol": "₨"
      }
    ]
  },
  {
    "name": "Netherlands",
    "alpha2Code": "NL",
    "alpha3Code": "NLD",
    "capital": "Amsterdam",
    "region": "Europe",
    "subregion": "Western Europe",
    "population": 17441139,
    "area": 41850,
    "latlng": [
      52.5,
      5.75
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/nl.png",
      "svg": "https://flagcdn.com/nl.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "New Caledonia",
    "alpha2Code": "NC",
    "alpha3Code": "NCL",
    "capital": "Nouméa",
    "region": "Oceania",
    "subregion": "Melanesia",
    "population": 271960,
    "area": 18575,
    "latlng": [
      -21.5,
      165.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/nc.png",
      "svg": "https://flagcdn.com/nc.svg"
    },
    "currencies": [
      {
        "code": "XPF",
        "name": "CFP franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "New Zealand",
    "alpha2Code": "NZ",
    "alpha3Code": "NZL",
    "capital": "Wellington",
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "population": 5084300,
    "area": 270467,
    "latlng": [
      -41,
      174
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/nz.png",
      "svg": "https://flagcdn.com/nz.svg"
    },
    "currencies": [
      {
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Nicaragua",
    "alpha2Code": "NI",
    "alpha3Code": "NIC",
    "capital": "Managua",
    "region": "Americas",
    "subregion": "Central America",
    "population": 6624554,
    "area": 130373,
    "latlng": [
      13,
      -85
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ni.png",
      "svg": "https://flagcdn.com/ni.svg"
    },
    "currencies": [
      {
        "code": "NIO",
        "name": "Nicaraguan córdoba",
        "symbol": "C$"
      }
    ]
  },
  {
    "name": "Niger",
    "alpha2Code": "NE",
    "alpha3Code": "NER",
    "capital": "Niamey",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 24206636,
    "area": 1267000,
    "latlng": [
      16,
      8
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ne.png",
      "svg": "https://flagcdn.com/ne.svg"
    },
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Nigeria",
    "alpha2Code": "NG",
    "alpha3Code": "NGA",
    "capital": "Abuja",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 206139587,
    "area": 923768,
    "latlng": [
      10,
      8
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ng.png",
      "svg": "https://flagcdn.com/ng.svg"
    },
    "currencies": [
      {
        "code": "NGN",
        "name": "Nigerian naira",
        "symbol": "₦"
      }
    ]
  },
  {
    "name": "Niue",
    "alpha2Code": "NU",
    "alpha3Code": "NIU",
    "capital": "Alofi",
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 1470,
    "area": 260,
    "latlng": [
      -19.03333333,
      -169.86666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/nu.png",
      "svg": "https://flagcdn.com/nu.svg"
    },
    "currencies": [
      {
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      },
      {
        "code": "NZD",
        "name": "Niue dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Norfolk Island",
    "alpha2Code": "NF",
    "alpha3Code": "NFK",
    "capital": "Kingston",
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "population": 2302,
    "area": 36,
    "latlng": [
      -29.03333333,
      167.95
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/nf.png",
      "svg": "https://flagcdn.com/nf.svg"
    },
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "North Macedonia",
    "alpha2Code": "MK",
    "alpha3Code": "MKD",
    "capital": "Skopje",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 2083380,
    "area": 25713,
    "latlng": [
      41.83333333,
      22
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mk.png",
      "svg": "https://flagcdn.com/mk.svg"
    },
    "currencies": [
      {
        "code": "MKD",
        "name": "Macedonian denar",
        "symbol": "ден"
      }
    ]
  },
  {
    "name": "Northern Mariana Islands",
    "alpha2Code": "MP",
    "alpha3Code": "MNP",
    "capital": "Saipan",
    "region": "Oceania",
    "subregion": "Micronesia",
    "population": 57557,
    "area": 464,
    "latlng": [
      15.2,
      145.75
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mp.png",
      "svg": "https://flagcdn.com/mp.svg"
    },
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Norway",
    "alpha2Code": "NO",
    "alpha3Code": "NOR",
    "capital": "Oslo",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 5379475,
    "area": 323802,
    "latlng": [
      62,
      10
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/no.png",
      "svg": "https://flagcdn.com/no.svg"
    },
    "currencies": [
      {
        "code": "NOK",
        "name": "Norwegian krone",
        "symbol": "kr"
      }
    ]
  },
  {
    "name": "Oman",
    "alpha2Code": "OM",
    "alpha3Code": "OMN",
    "capital": "Muscat",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 5106622,
    "area": 309500,
    "latlng": [
      21,
      57
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/om.png",
      "svg": "https://flagcdn.com/om.svg"
    },
    "currencies": [
      {
        "code": "OMR",
        "name": "Omani rial",
        "symbol": "ر.ع."
      }
    ]
  },
  {
    "name": "Pakistan",
    "alpha2Code": "PK",
    "alpha3Code": "PAK",
    "capital": "Islamabad",
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 220892331,
    "area": 881912,
    "latlng": [
      30,
      70
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pk.png",
      "svg": "https://flagcdn.com/pk.svg"
    },
    "currencies": [
      {
        "code": "PKR",
        "name": "Pakistani rupee",
        "symbol": "₨"
      }
    ]
  },
  {
    "name": "Palau",
    "alpha2Code": "PW",
    "alpha3Code": "PLW",
    "capital": "Ngerulmud",
    "region": "Oceania",
    "subregion": "Micronesia",
    "population": 18092,
    "area": 459,
    "latlng": [
      7.5,
      134.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pw.png",
      "svg": "https://flagcdn.com/pw.svg"
    },
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Palestine, State of",
    "alpha2Code": "PS",
    "alpha3Code": "PSE",
    "capital": "Ramallah",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 4803269,
    "latlng": [
      31.9,
      35.2
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ps.png",
      "svg": "https://flagcdn.com/ps.svg"
    },
    "currencies": [
      {
        "code": "EGP",
        "name": "Egyptian pound",
        "symbol": "E£"
      },
      {
        "code": "ILS",
        "name": "Israeli new shekel",
        "symbol": "₪"
      },
      {
        "code": "JOD",
        "name": "Jordanian dinar",
        "symbol": "د.أ"
      }
    ]
  },
  {
    "name": "Panama",
    "alpha2Code": "PA",
    "alpha3Code": "PAN",
    "capital": "Panama City",
    "region": "Americas",
    "subregion": "Central America",
    "population": 4314768,
    "area": 75417,
    "latlng": [
      9,
      -80
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pa.png",
      "svg": "https://flagcdn.com/pa.svg"
    },
    "currencies": [
      {
        "code": "PAB",
        "name": "Panamanian balboa",
        "symbol": "B/."
      },
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Papua New Guinea",
    "alpha2Code": "PG",
    "alpha3Code": "PNG",
    "capital": "Port Moresby",
    "region": "Oceania",
    "subregion": "Melanesia",
    "population": 8947027,
    "area": 462840,
    "latlng": [
      -6,
      147
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pg.png",
      "svg": "https://flagcdn.com/pg.svg"
    },
    "currencies": [
      {
        "code": "PGK",
        "name": "Papua New Guinean kina",
        "symbol": "K"
      }
    ]
  },
  {
    "name": "Paraguay",
    "alpha2Code": "PY",
    "alpha3Code": "PRY",
    "capital": "Asunción",
    "region": "Americas",
    "subregion": "South America",
    "population": 7132530,
    "area": 406752,
    "latlng": [
      -23,
      -58
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/py.png",
      "svg": "https://flagcdn.com/py.svg"
    },
    "currencies": [
      {
        "code": "PYG",
        "name": "Paraguayan guaraní",
        "symbol": "₲"
      }
    ]
  },
  {
    "name": "Peru",
    "alpha2Code": "PE",
    "alpha3Code": "PER",
    "capital": "Lima",
    "region": "Americas",
    "subregion": "South America",
    "population": 32971846,
    "area": 1285216,
    "latlng": [
      -10,
      -76
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pe.png",
      "svg": "https://flagcdn.com/pe.svg"
    },
    "currencies": [
      {
        "code": "PEN",
        "name": "Peruvian sol",
        "symbol": "S/."
      }
    ]
  },
  {
    "name": "Philippines",
    "alpha2Code": "PH",
    "alpha3Code": "PHL",
    "capital": "Manila",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 109581085,
    "area": 342353,
    "latlng": [
      13,
      122
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ph.png",
      "svg": "https://flagcdn.com/ph.svg"
    },
    "currencies": [
      {
        "code": "PHP",
        "name": "Philippine peso",
        "symbol": "₱"
      }
    ]
  },
  {
    "name": "Pitcairn",
    "alpha2Code": "PN",
    "alpha3Code": "PCN",
    "capital": "Adamstown",
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 56,
    "area": 47,
    "latlng": [
      -25.06666666,
      -130.1
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pn.png",
      "svg": "https://flagcdn.com/pn.svg"
    },
    "currencies": [
      {
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      },
      {
        "code": "PND",
        "name": "Pitcairn Islands dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Poland",
    "alpha2Code": "PL",
    "alpha3Code": "POL",
    "capital": "Warsaw",
    "region": "Europe",
    "subregion": "Central Europe",
    "population": 37950802,
    "area": 312679,
    "latlng": [
      52,
      20
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pl.png",
      "svg": "https://flagcdn.com/pl.svg"
    },
    "currencies": [
      {
        "code": "PLN",
        "name": "Polish złoty",
        "symbol": "zł"
      }
    ]
  },
  {
    "name": "Portugal",
    "alpha2Code": "PT",
    "alpha3Code": "PRT",
    "capital": "Lisbon",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 10305564,
    "area": 92090,
    "latlng": [
      39.5,
      -8
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pt.png",
      "svg": "https://flagcdn.com/pt.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Puerto Rico",
    "alpha2Code": "PR",
    "alpha3Code": "PRI",
    "capital": "San Juan",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 3194034,
    "area": 8870,
    "latlng": [
      18.25,
      -66.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pr.png",
      "svg": "https://flagcdn.com/pr.svg"
    },
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Qatar",
    "alpha2Code": "QA",
    "alpha3Code": "QAT",
    "capital": "Doha",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 2881060,
    "area": 11586,
    "latlng": [
      25.5,
      51.25
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/qa.png",
      "svg": "https://flagcdn.com/qa.svg"
    },
    "currencies": [
      {
        "code": "QAR",
        "name": "Qatari riyal",
        "symbol": "ر.ق"
      }
    ]
  },
  {
    "name": "Republic of Kosovo",
    "alpha2Code": "XK",
    "alpha3Code": "UNK",
    "capital": "Pristina",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "population": 1775378,
    "area": 10908,
    "latlng": [
      42.666667,
      21.166667
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/xk.png",
      "svg": "https://flagcdn.com/xk.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Réunion",
    "alpha2Code": "RE",
    "alpha3Code": "REU",
    "capital": "Saint-Denis",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 840974,
    "latlng": [
      -21.15,
      55.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/re.png",
      "svg": "https://flagcdn.com/re.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Romania",
    "alpha2Code": "RO",
    "alpha3Code": "ROU",
    "capital": "Bucharest",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "population": 19286123,
    "area": 238391,
    "latlng": [
      46,
      25
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ro.png",
      "svg": "https://flagcdn.com/ro.svg"
    },
    "currencies": [
      {
        "code": "RON",
        "name": "Romanian leu",
        "symbol": "lei"
      }
    ]
  },
  {
    "name": "Russian Federation",
    "alpha2Code": "RU",
    "alpha3Code": "RUS",
    "capital": "Moscow",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "population": 144104080,
    "area": 17124442,
    "latlng": [
      60,
      100
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ru.png",
      "svg": "https://flagcdn.com/ru.svg"
    },
    "currencies": [
      {
        "code": "RUB",
        "name": "Russian ruble",
        "symbol": "₽"
      }
    ]
  },
  {
    "name": "Rwanda",
    "alpha2Code": "RW",
    "alpha3Code": "RWA",
    "capital": "Kigali",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 12952209,
    "area": 26338,
    "latlng": [
      -2,
      30
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/rw.png",
      "svg": "https://flagcdn.com/rw.svg"
    },
    "currencies": [
      {
        "code": "RWF",
        "name": "Rwandan franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Saint Barthélemy",
    "alpha2Code": "BL",
    "alpha3Code": "BLM",
    "capital": "Gustavia",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 9417,
    "area": 21,
    "latlng": [
      18.5,
      -63.41666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/bl.png",
      "svg": "https://flagcdn.com/bl.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Saint Helena, Ascension and Tristan da Cunha",
    "alpha2Code": "SH",
    "alpha3Code": "SHN",
    "capital": "Jamestown",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 4255,
    "latlng": [
      -15.95,
      -5.7
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sh.png",
      "svg": "https://flagcdn.com/sh.svg"
    },
    "currencies": [
      {
        "code": "SHP",
        "name": "Saint Helena pound",
        "symbol": "£"
      }
    ]
  },
  {
    "name": "Saint Kitts and Nevis",
    "alpha2Code": "KN",
    "alpha3Code": "KNA",
    "capital": "Basseterre",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 53192,
    "area": 261,
    "latlng": [
      17.33333333,
      -62.75
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/kn.png",
      "svg": "https://flagcdn.com/kn.svg"
    },
    "currencies": [
      {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Saint Lucia",
    "alpha2Code": "LC",
    "alpha3Code": "LCA",
    "capital": "Castries",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 183629,
    "area": 616,
    "latlng": [
      13.88333333,
      -60.96666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/lc.png",
      "svg": "https://flagcdn.com/lc.svg"
    },
    "currencies": [
      {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Saint Martin (French part)",
    "alpha2Code": "MF",
    "alpha3Code": "MAF",
    "capital": "Marigot",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 38659,
    "area": 53,
    "latlng": [
      18.08333333,
      -63.95
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/mf.png",
      "svg": "https://flagcdn.com/mf.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Saint Pierre and Miquelon",
    "alpha2Code": "PM",
    "alpha3Code": "SPM",
    "capital": "Saint-Pierre",
    "region": "Americas",
    "subregion": "Northern America",
    "population": 6069,
    "area": 242,
    "latlng": [
      46.83333333,
      -56.33333333
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/pm.png",
      "svg": "https://flagcdn.com/pm.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "alpha2Code": "VC",
    "alpha3Code": "VCT",
    "capital": "Kingstown",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 110947,
    "area": 389,
    "latlng": [
      13.25,
      -61.2
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/vc.png",
      "svg": "https://flagcdn.com/vc.svg"
    },
    "currencies": [
      {
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Samoa",
    "alpha2Code": "WS",
    "alpha3Code": "WSM",
    "capital": "Apia",
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 198410,
    "area": 2842,
    "latlng": [
      -13.58333333,
      -172.33333333
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ws.png",
      "svg": "https://flagcdn.com/ws.svg"
    },
    "currencies": [
      {
        "code": "WST",
        "name": "Samoan tālā",
        "symbol": "T"
      }
    ]
  },
  {
    "name": "San Marino",
    "alpha2Code": "SM",
    "alpha3Code": "SMR",
    "capital": "City of San Marino",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 33938,
    "area": 61,
    "latlng": [
      43.76666666,
      12.41666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sm.png",
      "svg": "https://flagcdn.com/sm.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Sao Tome and Principe",
    "alpha2Code": "ST",
    "alpha3Code": "STP",
    "capital": "São Tomé",
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 219161,
    "area": 964,
    "latlng": [
      1,
      7
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/st.png",
      "svg": "https://flagcdn.com/st.svg"
    },
    "currencies": [
      {
        "code": "STD",
        "name": "São Tomé and Príncipe dobra",
        "symbol": "Db"
      }
    ]
  },
  {
    "name": "Saudi Arabia",
    "alpha2Code": "SA",
    "alpha3Code": "SAU",
    "capital": "Riyadh",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 34813867,
    "area": 2149690,
    "latlng": [
      25,
      45
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sa.png",
      "svg": "https://flagcdn.com/sa.svg"
    },
    "currencies": [
      {
        "code": "SAR",
        "name": "Saudi riyal",
        "symbol": "ر.س"
      }
    ]
  },
  {
    "name": "Senegal",
    "alpha2Code": "SN",
    "alpha3Code": "SEN",
    "capital": "Dakar",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 16743930,
    "area": 196722,
    "latlng": [
      14,
      -14
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sn.png",
      "svg": "https://flagcdn.com/sn.svg"
    },
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Serbia",
    "alpha2Code": "RS",
    "alpha3Code": "SRB",
    "capital": "Belgrade",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 6908224,
    "area": 88361,
    "latlng": [
      44,
      21
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/rs.png",
      "svg": "https://flagcdn.com/rs.svg"
    },
    "currencies": [
      {
        "code": "RSD",
        "name": "Serbian dinar",
        "symbol": "дин."
      }
    ]
  },
  {
    "name": "Seychelles",
    "alpha2Code": "SC",
    "alpha3Code": "SYC",
    "capital": "Victoria",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 98462,
    "area": 452,
    "latlng": [
      -4.58333333,
      55.66666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sc.png",
      "svg": "https://flagcdn.com/sc.svg"
    },
    "currencies": [
      {
        "code": "SCR",
        "name": "Seychellois rupee",
        "symbol": "₨"
      }
    ]
  },
  {
    "name": "Sierra Leone",
    "alpha2Code": "SL",
    "alpha3Code": "SLE",
    "capital": "Freetown",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 7976985,
    "area": 71740,
    "latlng": [
      8.5,
      -11.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sl.png",
      "svg": "https://flagcdn.com/sl.svg"
    },
    "currencies": [
      {
        "code": "SLL",
        "name": "Sierra Leonean leone",
        "symbol": "Le"
      }
    ]
  },
  {
    "name": "Singapore",
    "alpha2Code": "SG",
    "alpha3Code": "SGP",
    "capital": "Singapore",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 5685807,
    "area": 710,
    "latlng": [
      1.36666666,
      103.8
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sg.png",
      "svg": "https://flagcdn.com/sg.svg"
    },
    "currencies": [
      {
        "code": "SGD",
        "name": "Singapore dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Sint Maarten (Dutch part)",
    "alpha2Code": "SX",
    "alpha3Code": "SXM",
    "capital": "Philipsburg",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 40812,
    "area": 34,
    "latlng": [
      18.033333,
      -63.05
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sx.png",
      "svg": "https://flagcdn.com/sx.svg"
    },
    "currencies": [
      {
        "code": "ANG",
        "name": "Netherlands Antillean guilder",
        "symbol": "ƒ"
      }
    ]
  },
  {
    "name": "Slovakia",
    "alpha2Code": "SK",
    "alpha3Code": "SVK",
    "capital": "Bratislava",
    "region": "Europe",
    "subregion": "Central Europe",
    "population": 5458827,
    "area": 49037,
    "latlng": [
      48.66666666,
      19.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sk.png",
      "svg": "https://flagcdn.com/sk.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Slovenia",
    "alpha2Code": "SI",
    "alpha3Code": "SVN",
    "capital": "Ljubljana",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 2100126,
    "area": 20273,
    "latlng": [
      46.11666666,
      14.81666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/si.png",
      "svg": "https://flagcdn.com/si.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Solomon Islands",
    "alpha2Code": "SB",
    "alpha3Code": "SLB",
    "capital": "Honiara",
    "region": "Oceania",
    "subregion": "Melanesia",
    "population": 686878,
    "area": 28896,
    "latlng": [
      -8,
      159
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sb.png",
      "svg": "https://flagcdn.com/sb.svg"
    },
    "currencies": [
      {
        "code": "SBD",
        "name": "Solomon Islands dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Somalia",
    "alpha2Code": "SO",
    "alpha3Code": "SOM",
    "capital": "Mogadishu",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 15893219,
    "area": 637657,
    "latlng": [
      10,
      49
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/so.png",
      "svg": "https://flagcdn.com/so.svg"
    },
    "currencies": [
      {
        "code": "SOS",
        "name": "Somali shilling",
        "symbol": "Sh"
      }
    ]
  },
  {
    "name": "South Africa",
    "alpha2Code": "ZA",
    "alpha3Code": "ZAF",
    "capital": "Pretoria",
    "region": "Africa",
    "subregion": "Southern Africa",
    "population": 59308690,
    "area": 1221037,
    "latlng": [
      -29,
      24
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/za.png",
      "svg": "https://flagcdn.com/za.svg"
    },
    "currencies": [
      {
        "code": "ZAR",
        "name": "South African rand",
        "symbol": "R"
      }
    ]
  },
  {
    "name": "South Georgia and the South Sandwich Islands",
    "alpha2Code": "GS",
    "alpha3Code": "SGS",
    "capital": "King Edward Point",
    "region": "Americas",
    "subregion": "South America",
    "population": 30,
    "latlng": [
      -54.5,
      -37
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gs.png",
      "svg": "https://flagcdn.com/gs.svg"
    },
    "currencies": [
      {
        "code": "FKP",
        "name": "Falkland Islands Pound",
        "symbol": "£"
      }
    ]
  },
  {
    "name": "South Sudan",
    "alpha2Code": "SS",
    "alpha3Code": "SSD",
    "capital": "Juba",
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 11193729,
    "area": 619745,
    "latlng": [
      7,
      30
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ss.png",
      "svg": "https://flagcdn.com/ss.svg"
    },
    "currencies": [
      {
        "code": "SSP",
        "name": "South Sudanese pound",
        "symbol": "£"
      }
    ]
  },
  {
    "name": "Spain",
    "alpha2Code": "ES",
    "alpha3Code": "ESP",
    "capital": "Madrid",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 47351567,
    "area": 505992,
    "latlng": [
      40,
      -4
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/es.png",
      "svg": "https://flagcdn.com/es.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Sri Lanka",
    "alpha2Code": "LK",
    "alpha3Code": "LKA",
    "capital": "Sri Jayawardenepura Kotte",
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 21919000,
    "area": 65610,
    "latlng": [
      7,
      81
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/lk.png",
      "svg": "https://flagcdn.com/lk.svg"
    },
    "currencies": [
      {
        "code": "LKR",
        "name": "Sri Lankan rupee",
        "symbol": "Rs"
      }
    ]
  },
  {
    "name": "Sudan",
    "alpha2Code": "SD",
    "alpha3Code": "SDN",
    "capital": "Khartoum",
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 43849269,
    "area": 1886068,
    "latlng": [
      15,
      30
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sd.png",
      "svg": "https://flagcdn.com/sd.svg"
    },
    "currencies": [
      {
        "code": "SDG",
        "name": "Sudanese pound",
        "symbol": "ج.س."
      }
    ]
  },
  {
    "name": "Suriname",
    "alpha2Code": "SR",
    "alpha3Code": "SUR",
    "capital": "Paramaribo",
    "region": "Americas",
    "subregion": "South America",
    "population": 586634,
    "area": 163820,
    "latlng": [
      4,
      -56
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sr.png",
      "svg": "https://flagcdn.com/sr.svg"
    },
    "currencies": [
      {
        "code": "SRD",
        "name": "Surinamese dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Svalbard and Jan Mayen",
    "alpha2Code": "SJ",
    "alpha3Code": "SJM",
    "capital": "Longyearbyen",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 2562,
    "latlng": [
      78,
      20
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sj.png",
      "svg": "https://flagcdn.com/sj.svg"
    },
    "currencies": [
      {
        "code": "NOK",
        "name": "Norwegian krone",
        "symbol": "kr"
      }
    ]
  },
  {
    "name": "Swaziland",
    "alpha2Code": "SZ",
    "alpha3Code": "SWZ",
    "capital": "Mbabane",
    "region": "Africa",
    "subregion": "Southern Africa",
    "population": 1160164,
    "area": 17364,
    "latlng": [
      -26.5,
      31.5
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sz.png",
      "svg": "https://flagcdn.com/sz.svg"
    },
    "currencies": [
      {
        "code": "SZL",
        "name": "Swazi lilangeni",
        "symbol": "L"
      }
    ]
  },
  {
    "name": "Sweden",
    "alpha2Code": "SE",
    "alpha3Code": "SWE",
    "capital": "Stockholm",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 10353442,
    "area": 450295,
    "latlng": [
      62,
      15
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/se.png",
      "svg": "https://flagcdn.com/se.svg"
    },
    "currencies": [
      {
        "code": "SEK",
        "name": "Swedish krona",
        "symbol": "kr"
      }
    ]
  },
  {
    "name": "Switzerland",
    "alpha2Code": "CH",
    "alpha3Code": "CHE",
    "capital": "Bern",
    "region": "Europe",
    "subregion": "Central Europe",
    "population": 8636896,
    "area": 41284,
    "latlng": [
      47,
      8
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ch.png",
      "svg": "https://flagcdn.com/ch.svg"
    },
    "currencies": [
      {
        "code": "CHF",
        "name": "Swiss franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Syrian Arab Republic",
    "alpha2Code": "SY",
    "alpha3Code": "SYR",
    "capital": "Damascus",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 17500657,
    "area": 185180,
    "latlng": [
      35,
      38
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/sy.png",
      "svg": "https://flagcdn.com/sy.svg"
    },
    "currencies": [
      {
        "code": "SYP",
        "name": "Syrian pound",
        "symbol": "£"
      }
    ]
  },
  {
    "name": "Taiwan",
    "alpha2Code": "TW",
    "alpha3Code": "TWN",
    "capital": "Taipei",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 23503349,
    "area": 36193,
    "latlng": [
      23.5,
      121
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tw.png",
      "svg": "https://flagcdn.com/tw.svg"
    },
    "currencies": [
      {
        "code": "TWD",
        "name": "New Taiwan dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Tajikistan",
    "alpha2Code": "TJ",
    "alpha3Code": "TJK",
    "capital": "Dushanbe",
    "region": "Asia",
    "subregion": "Central Asia",
    "population": 9537642,
    "area": 143100,
    "latlng": [
      39,
      71
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tj.png",
      "svg": "https://flagcdn.com/tj.svg"
    },
    "currencies": [
      {
        "code": "TJS",
        "name": "Tajikistani somoni",
        "symbol": "ЅМ"
      }
    ]
  },
  {
    "name": "Tanzania, United Republic of",
    "alpha2Code": "TZ",
    "alpha3Code": "TZA",
    "capital": "Dodoma",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 59734213,
    "area": 945087,
    "latlng": [
      -6,
      35
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tz.png",
      "svg": "https://flagcdn.com/tz.svg"
    },
    "currencies": [
      {
        "code": "TZS",
        "name": "Tanzanian shilling",
        "symbol": "Sh"
      }
    ]
  },
  {
    "name": "Thailand",
    "alpha2Code": "TH",
    "alpha3Code": "THA",
    "capital": "Bangkok",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 69799978,
    "area": 513120,
    "latlng": [
      15,
      100
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/th.png",
      "svg": "https://flagcdn.com/th.svg"
    },
    "currencies": [
      {
        "code": "THB",
        "name": "Thai baht",
        "symbol": "฿"
      }
    ]
  },
  {
    "name": "Timor-Leste",
    "alpha2Code": "TL",
    "alpha3Code": "TLS",
    "capital": "Dili",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 1318442,
    "area": 14874,
    "latlng": [
      -8.83333333,
      125.91666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tl.png",
      "svg": "https://flagcdn.com/tl.svg"
    },
    "currencies": [
      {
        "code": "USD",
        "name": "United States Dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Togo",
    "alpha2Code": "TG",
    "alpha3Code": "TGO",
    "capital": "Lomé",
    "region": "Africa",
    "subregion": "Western Africa",
    "population": 8278737,
    "area": 56785,
    "latlng": [
      8,
      1.16666666
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tg.png",
      "svg": "https://flagcdn.com/tg.svg"
    },
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Tokelau",
    "alpha2Code": "TK",
    "alpha3Code": "TKL",
    "capital": "Fakaofo",
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 1411,
    "area": 12,
    "latlng": [
      -9,
      -172
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tk.png",
      "svg": "https://flagcdn.com/tk.svg"
    },
    "currencies": [
      {
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Tonga",
    "alpha2Code": "TO",
    "alpha3Code": "TON",
    "capital": "Nuku'alofa",
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 105697,
    "area": 747,
    "latlng": [
      -20,
      -175
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/to.png",
      "svg": "https://flagcdn.com/to.svg"
    },
    "currencies": [
      {
        "code": "TOP",
        "name": "Tongan paʻanga",
        "symbol": "T$"
      }
    ]
  },
  {
    "name": "Trinidad and Tobago",
    "alpha2Code": "TT",
    "alpha3Code": "TTO",
    "capital": "Port of Spain",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 1399491,
    "area": 5130,
    "latlng": [
      11,
      -61
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tt.png",
      "svg": "https://flagcdn.com/tt.svg"
    },
    "currencies": [
      {
        "code": "TTD",
        "name": "Trinidad and Tobago dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Tunisia",
    "alpha2Code": "TN",
    "alpha3Code": "TUN",
    "capital": "Tunis",
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 11818618,
    "area": 163610,
    "latlng": [
      34,
      9
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tn.png",
      "svg": "https://flagcdn.com/tn.svg"
    },
    "currencies": [
      {
        "code": "TND",
        "name": "Tunisian dinar",
        "symbol": "د.ت"
      }
    ]
  },
  {
    "name": "Turkey",
    "alpha2Code": "TR",
    "alpha3Code": "TUR",
    "capital": "Ankara",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 84339067,
    "area": 783562,
    "latlng": [
      39,
      35
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tr.png",
      "svg": "https://flagcdn.com/tr.svg"
    },
    "currencies": [
      {
        "code": "TRY",
        "name": "Turkish lira",
        "symbol": "₺"
      }
    ]
  },
  {
    "name": "Turkmenistan",
    "alpha2Code": "TM",
    "alpha3Code": "TKM",
    "capital": "Ashgabat",
    "region": "Asia",
    "subregion": "Central Asia",
    "population": 6031187,
    "area": 488100,
    "latlng": [
      40,
      60
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tm.png",
      "svg": "https://flagcdn.com/tm.svg"
    },
    "currencies": [
      {
        "code": "TMT",
        "name": "Turkmenistan manat",
        "symbol": "m"
      }
    ]
  },
  {
    "name": "Turks and Caicos Islands",
    "alpha2Code": "TC",
    "alpha3Code": "TCA",
    "capital": "Cockburn Town",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 38718,
    "area": 948,
    "latlng": [
      21.75,
      -71.58333333
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tc.png",
      "svg": "https://flagcdn.com/tc.svg"
    },
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Tuvalu",
    "alpha2Code": "TV",
    "alpha3Code": "TUV",
    "capital": "Funafuti",
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 11792,
    "area": 26,
    "latlng": [
      -8,
      178
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/tv.png",
      "svg": "https://flagcdn.com/tv.svg"
    },
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      },
      {
        "code": "TVD[G]",
        "name": "Tuvaluan dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Uganda",
    "alpha2Code": "UG",
    "alpha3Code": "UGA",
    "capital": "Kampala",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 45741000,
    "area": 241550,
    "latlng": [
      1,
      32
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ug.png",
      "svg": "https://flagcdn.com/ug.svg"
    },
    "currencies": [
      {
        "code": "UGX",
        "name": "Ugandan shilling",
        "symbol": "Sh"
      }
    ]
  },
  {
    "name": "Ukraine",
    "alpha2Code": "UA",
    "alpha3Code": "UKR",
    "capital": "Kyiv",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "population": 44134693,
    "area": 603700,
    "latlng": [
      49,
      32
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ua.png",
      "svg": "https://flagcdn.com/ua.svg"
    },
    "currencies": [
      {
        "code": "UAH",
        "name": "Ukrainian hryvnia",
        "symbol": "₴"
      }
    ]
  },
  {
    "name": "United Arab Emirates",
    "alpha2Code": "AE",
    "alpha3Code": "ARE",
    "capital": "Abu Dhabi",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 9890400,
    "area": 83600,
    "latlng": [
      24,
      54
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ae.png",
      "svg": "https://flagcdn.com/ae.svg"
    },
    "currencies": [
      {
        "code": "AED",
        "name": "United Arab Emirates dirham",
        "symbol": "د.إ"
      }
    ]
  },
  {
    "name": "United Kingdom of Great Britain and Northern Ireland",
    "alpha2Code": "GB",
    "alpha3Code": "GBR",
    "capital": "London",
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 67215293,
    "area": 242900,
    "latlng": [
      54,
      -2
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gb.png",
      "svg": "https://flagcdn.com/gb.svg"
    },
    "currencies": [
      {
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      }
    ]
  },
  {
    "name": "United States Minor Outlying Islands",
    "alpha2Code": "UM",
    "alpha3Code": "UMI",
    "capital": "",
    "region": "Americas",
    "subregion": "Northern America",
    "population": 300,
    "flags": {
      "png": "https://flagcdn.com/w320/um.png",
      "svg": "https://flagcdn.com/um.svg"
    },
    "currencies": [
      {
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      }
    ]
  },
  {
    "name": "United States of America",
    "alpha2Code": "US",
    "alpha3Code": "USA",
    "capital": "Washington, D.C.",
    "region": "Americas",
    "subregion": "Northern America",
    "population": 329484123,
    "area": 9629091,
    "latlng": [
      38,
      -97
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/us.png",
      "svg": "https://flagcdn.com/us.svg"
    },
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Uruguay",
    "alpha2Code": "UY",
    "alpha3Code": "URY",
    "capital": "Montevideo",
    "region": "Americas",
    "subregion": "South America",
    "population": 3473727,
    "area": 181034,
    "latlng": [
      -33,
      -56
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/uy.png",
      "svg": "https://flagcdn.com/uy.svg"
    },
    "currencies": [
      {
        "code": "UYU",
        "name": "Uruguayan peso",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Uzbekistan",
    "alpha2Code": "UZ",
    "alpha3Code": "UZB",
    "capital": "Tashkent",
    "region": "Asia",
    "subregion": "Central Asia",
    "population": 34232050,
    "area": 447400,
    "latlng": [
      41,
      64
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/uz.png",
      "svg": "https://flagcdn.com/uz.svg"
    },
    "currencies": [
      {
        "code": "UZS",
        "name": "Uzbekistani so'm",
        "symbol": "so'm"
      }
    ]
  },
  {
    "name": "Vanuatu",
    "alpha2Code": "VU",
    "alpha3Code": "VUT",
    "capital": "Port Vila",
    "region": "Oceania",
    "subregion": "Melanesia",
    "population": 307150,
    "area": 12189,
    "latlng": [
      -16,
      167
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/vu.png",
      "svg": "https://flagcdn.com/vu.svg"
    },
    "currencies": [
      {
        "code": "VUV",
        "name": "Vanuatu vatu",
        "symbol": "Vt"
      }
    ]
  },
  {
    "name": "Vatican City",
    "alpha2Code": "VA",
    "alpha3Code": "VAT",
    "capital": "Vatican City",
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 451,
    "area": 0.44,
    "latlng": [
      41.9,
      12.45
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/va.png",
      "svg": "https://flagcdn.com/va.svg"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  },
  {
    "name": "Venezuela (Bolivarian Republic of)",
    "alpha2Code": "VE",
    "alpha3Code": "VEN",
    "capital": "Caracas",
    "region": "Americas",
    "subregion": "South America",
    "population": 28435943,
    "area": 916445,
    "latlng": [
      8,
      -66
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ve.png",
      "svg": "https://flagcdn.com/ve.svg"
    },
    "currencies": [
      {
        "code": "VEF",
        "name": "Venezuelan bolívar",
        "symbol": "Bs S"
      }
    ]
  },
  {
    "name": "Vietnam",
    "alpha2Code": "VN",
    "alpha3Code": "VNM",
    "capital": "Hanoi",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "population": 97338583,
    "area": 331212,
    "latlng": [
      16.16666666,
      107.83333333
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/vn.png",
      "svg": "https://flagcdn.com/vn.svg"
    },
    "currencies": [
      {
        "code": "VND",
        "name": "Vietnamese đồng",
        "symbol": "₫"
      }
    ]
  },
  {
    "name": "Virgin Islands (British)",
    "alpha2Code": "VG",
    "alpha3Code": "VGB",
    "capital": "Road Town",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 30237,
    "area": 151,
    "latlng": [
      18.431383,
      -64.62305
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/vg.png",
      "svg": "https://flagcdn.com/vg.svg"
    },
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Virgin Islands (U.S.)",
    "alpha2Code": "VI",
    "alpha3Code": "VIR",
    "capital": "Charlotte Amalie",
    "region": "Americas",
    "subregion": "Caribbean",
    "population": 106290,
    "area": 346.36,
    "latlng": [
      18.34,
      -64.93
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/vi.png",
      "svg": "https://flagcdn.com/vi.svg"
    },
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ]
  },
  {
    "name": "Wallis and Futuna",
    "alpha2Code": "WF",
    "alpha3Code": "WLF",
    "capital": "Mata-Utu",
    "region": "Oceania",
    "subregion": "Polynesia",
    "population": 11750,
    "area": 142,
    "latlng": [
      -13.3,
      -176.2
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/wf.png",
      "svg": "https://flagcdn.com/wf.svg"
    },
    "currencies": [
      {
        "code": "XPF",
        "name": "CFP franc",
        "symbol": "Fr"
      }
    ]
  },
  {
    "name": "Western Sahara",
    "alpha2Code": "EH",
    "alpha3Code": "ESH",
    "capital": "El Aaiún",
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 510713,
    "area": 266000,
    "latlng": [
      24.5,
      -13
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/eh.png",
      "svg": "https://flagcdn.com/eh.svg"
    },
    "currencies": [
      {
        "code": "MAD",
        "name": "Moroccan dirham",
        "symbol": "د.م."
      },
      {
        "code": "DZD",
        "name": "Algerian dinar",
        "symbol": "د.ج"
      }
    ]
  },
  {
    "name": "Yemen",
    "alpha2Code": "YE",
    "alpha3Code": "YEM",
    "capital": "Sana'a",
    "region": "Asia",
    "subregion": "Western Asia",
    "population": 29825968,
    "area": 527968,
    "latlng": [
      15,
      48
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/ye.png",
      "svg": "https://flagcdn.com/ye.svg"
    },
    "currencies": [
      {
        "code": "YER",
        "name": "Yemeni rial",
        "symbol": "﷼"
      }
    ]
  },
  {
    "name": "Zambia",
    "alpha2Code": "ZM",
    "alpha3Code": "ZMB",
    "capital": "Lusaka",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "population": 18383956,
    "area": 752618,
    "latlng": [
      -15,
      30
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/zm.png",
      "svg": "https://flagcdn.com/zm.svg"
    },
    "currencies": [
      {
        "code": "ZMW",
        "name": "Zambian kwacha",
        "symbol": "ZK"
      }
    ]
  },
  {
    "name": "Zimbabwe",
    "alpha2Code": "ZW",
    "alpha3Code": "ZWE",
    "capital": "Harare",
    "region": "Africa",
    "subregion": "Southern Africa",
    "population": 14862927,
    "area": 390757,
    "latlng": [
      -20,
      30
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/zw.png",
      "svg": "https://flagcdn.com/zw.svg"
    },
    "currencies": [
      {
        "code": "ZMW",
        "name": "Zambian kwacha",
        "symbol": "K"
      }
    ]
  }
];

export default localData;

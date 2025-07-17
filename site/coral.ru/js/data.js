/*
===============================================
📌 Правила заполнения массива toursByCountry

1️⃣ Структура массива:
[
  {
    country: "Название страны",
    hotels: [
      {
        hotel: "Название отеля (латиницей)",
        dates: ["YYYY-MM-DD", "YYYY-MM-DD"],
        rating: 5,                  // (необязательно)
        parentCountry: "Страна",    // (необязательно)
        location: "Страна, Курорт", // (необязательно)
        meal: "Тип номера, питание",// (необязательно)
        nights: 7,                  // (необязательно)
        departure: "из Города",     // (необязательно)
        package: "Описание пакета", // (необязательно)
        urls: [                     // (необязательно)
          "https://...",
          "https://..."
        ]
      },
      ...
    ]
  },
  ...
]

2️⃣ Обязательные поля для каждого отеля:
- hotel: название отеля на латинице
- dates: массив дат (строк) в формате "YYYY-MM-DD"
- rating: число от 1 до 5
- location: "Страна, курорт, регион"
- meal: описание номера и питания
- nights: количество ночей
- passengers: количество туристов
- departure: откуда вылет
- package: что включено
- urls: массив ссылок на страницы тура

4️⃣ Важные правила:
✅ Строки всегда в двойных кавычках "
✅ Даты строго в формате "YYYY-MM-DD"
✅ Все поля заполнены
===============================================
*/

window._toursByCountry = [
  {
    country: "Турция",
    hotels: [
      {
        hotel: "ULUSOY KEMER HOLIDAY CLUB",
        dates: ["2025-08-15", "2025-09-11"],
        rating: 5,
        location: 'Турция, Кемер, Гейнюк',
        meal: 'Standard Room, Ультра все включено',
        nights: 7,
        passengers: 'на двоих',
        departure: 'из Москвы',
        package: 'Перелет включен',
        urls: [
          'https://www.coral.ru/hotels/turkey/ulusoy-kemer-holiday-club-kemer/?qp=lWOJw1XDa14WeujkN6zDTvIti%2bYixcUzGZWeTEhGb1ESTni%2fLzyihGwA5bpfycDrNGdsgSKcatR7CRySKnDy1KHLdgVHi9ZATsWWCfcptqjdqkHR3q4gxOsFsIjEst267ALW38%2fGgEgo5ThVPwW20KObYCDpmeTyUhrqzpCNZNiXUkjUWFeEv1lITWkLcFX7wtz1TLWr7S7OA4Icy0TscpINIWqPHuAZjChajAMH%2fgSZjfz8U64viw%2faWUI3HxTyWOaG%2b5ImPDCOQFDqgrlJ4vL71eXbcRvjVPtY4F52RwA1SgFuQsrnjU9MAYfn8J4X&p=1&w=0&s=0',
          'https://www.coral.ru/hotels/turkey/ulusoy-kemer-holiday-club-kemer/?qp=lWOJw1XDa14WeujkN6zDTrQ7ouYEfFiIA5SfOn%2bM%2bL4pu2D6rL981ZpnDRklYAxTeIBNksNt6ZZcsNj0agbpM5d7wwt64dccPfPYpODQi9JXTkqB32v1VczfUFAS6j02VtVpkADjTUzTc3QZ3VZuYQN2pxks9H3cmjwruQpo0oB2hH1K9ALZrVqCBCxv2mT8XbGV5NTbPZ6zt2m5tPb4vN7KEQK5q5ARoFSU76HV8usWkVl3pj7t8LAuxemTCMyCKPlepztld0KbH7E0VxokubbV0b25xtsjekq4iXRS10F92wkzvpwd%2bM5Pe9NBqOV7&p=1&w=0&s=0'
        ],
      },
      {
        hotel: "SEVEN SEAS HOTEL LIFE",
        dates: ["2025-08-15", "2025-09-11"],
        rating: 5,
        location: 'Турция, Кемер, Гейнюк',
        meal: 'Main Building Standard Room, Ультра все включено',
        nights: 7,
        passengers: 'на двоих',
        departure: 'из Москвы',
        package: 'Перелет включен',
        urls: [
          'https://www.coral.ru/hotels/turkey/seven-seas-hotel-life-kemer/?qp=lWOJw1XDa14WeujkN6zDTvIti%2bYixcUzGZWeTEhGb1ESTni%2fLzyihGwA5bpfycDrNGdsgSKcatR7CRySKnDy1KHLdgVHi9ZATsWWCfcptqjdqkHR3q4gxOsFsIjEst2609tTvf36sOAwkBRmgr3D6XyLXGxSj7NXAx3PZlM72dDCPOQl1hZnoEwr5hOjxqB%2fKOnJkGSiCEfJ3cNochRtITQ%2bnf%2b8%2fMf4Nvzxef0pCKJ1d77lv99uVjvXktb9dPSLGAcBMOJ92fTiJZhwgSlolKfd9YyW306Af6Hm5B1lV7pZwYonu9UnxCdy855RzwCMbyJM5KeSynICIblN6u%2bR5w%3d%3d&p=1&w=0&s=0',
          'https://www.coral.ru/hotels/turkey/seven-seas-hotel-life-kemer/?qp=lWOJw1XDa14WeujkN6zDTrQ7ouYEfFiIA5SfOn%2bM%2bL4pu2D6rL981ZpnDRklYAxTeIBNksNt6ZZcsNj0agbpM5d7wwt64dccPfPYpODQi9JXTkqB32v1VczfUFAS6j02ivTcdDOV%2fy%2bzYQzl3XTqswnkQQugp9c1I8%2bV%2bpMe5vBAPvgwLIbR2Mlm4w%2b0UjEgGvFN1pyC8wg7W97P9kS7FFD3jHbdkrkokRYkB4eD9YuQB%2bshlZ17A7kHftDFE40Ljl9Jys8BY7Kpp%2bqVAk9aU1H3XzVrHsxJEFZEwp97zxp5qDvMAlf5qRCx2lDU9R9IFMEKi56fDcRwUl8fI8PnWQ%3d%3d&p=1&w=0&s=0'
        ],
      },
      {
        hotel: "TRANSATLANTIK HOTEL& SPA",
        dates: ["2025-09-19", "2025-10-01"],
        rating: 5,
        location: 'Турция, Кемер, Гейнюк',
        meal: 'Standard Room, Ультра все включено',
        nights: 7,
        passengers: 'на двоих',
        departure: 'из Москвы',
        package: 'Перелет включен',
        urls: [
          'https://www.coral.ru/hotels/turkey/transatlantik-hotel-spa-kemer/?qp=lWOJw1XDa14WeujkN6zDTlIyWmTqD96%2fD3zbcYc6wepWDeOONPM2wqVcusAbReKrKUxeKHL6bdK4DPDQ8ZXp26L%2bDVp18k%2bcpiWI5AzG1ZK6nGinohmiwsCBF1Fok%2bSnDJMpm%2f91ABmUpWzIF74%2bFFancryZGUvqSqkolcDCwBL7YsonvO%2f9tDMxIjS%2bkG5Y8TxYH3lNasWb8RmpDmQ2GBqt4Nz%2fTiwYRx12qjJoqXvqlMoNZ4DTc8KVA23VaI72zmSsEZoy%2bqXmPGHcSDT7ABlyYbald6aLG60G0EoofYe%2bcJxFm09tgxTdQkYUxjRlgGMshDjbhIeW2I2VjGQ32w%3d%3d&p=1&w=0&s=0',
          'https://www.coral.ru/hotels/turkey/transatlantik-hotel-spa-kemer/?qp=lWOJw1XDa14WeujkN6zDTndepk4hoU3TW6CW5c4x5M91UT349JjfnXOZ5zcmPvDDG3tppvyTB9bpGkwKo0g9a%2fjDmZWdO7%2fi9WAmr0QoEafvoCsgA%2bGD0lpn8Xy%2fTwE%2blLm2HjzeTbWsHWLqa6UoAuXAfsgHxx%2fSdY0oxaDSMxP%2fJ8NgnqeedQEG5%2f7px3%2bMyF8ls8813%2fnK3h52JRhT98aUZA9v1Q9M9mjeLoncK5iKR%2b%2bjbJItlalkChd9EP8X7NjOMeTgUGDWaheHRw2iJFMaaJzoC10PlFS%2bYIt04RPVeIFrIiiyKk7oRcTdMPjsbsZAsysDqpctOnv440KaZQ%3d%3d&p=1&w=0&s=0'
        ],
      },
      {
        hotel: "SIMENA COMFORT HOTEL",
        dates: ["2025-09-17", "2025-10-01"],
        rating: 5,
        location: 'Турция, Кемер, Гейнюк',
        meal: 'Standard Room, Ультра все включено',
        nights: 7,
        passengers: 'на двоих',
        departure: 'из Москвы',
        package: 'Перелет включен',
        urls: [
          'https://www.coral.ru/hotels/turkey/simena-comfort-hotel-kemer/?qp=lWOJw1XDa14WeujkN6zDThBcXsxV5Zc7XwUxmDZDXR91%2bJAC4OCRPenaABVummQt7PJ78D0ukpXMBC%2f4VFghnhZjuv9a%2bp%2b6f8hK4o%2bgzW9ws318woVcK%2fI2qUb0Z9Gyp3SRcJJXuTNwWVc7c6UwS%2fyHwmsk03vpezfKyln3qLE4Q2OQLuARk8jwHX5bSBOebcyOfA8HYLJmN568kECge621ndxk7ny1fxRnkiew%2bNt5TjY6ymdkBKVrPReQmaEAWmKEe8THn%2ffqG0RR6YCXR3k0dFCmr%2b6M07S0gbmArQEkxGBtcntyPrG5Kxv2aQwy&p=1&w=0&s=0',
          'https://www.coral.ru/hotels/turkey/simena-comfort-hotel-kemer/?qp=lWOJw1XDa14WeujkN6zDTndepk4hoU3TW6CW5c4x5M91UT349JjfnXOZ5zcmPvDDG3tppvyTB9bpGkwKo0g9a%2fjDmZWdO7%2fi9WAmr0QoEafvoCsgA%2bGD0lpn8Xy%2fTwE%2bq5jkVdAP2hXhihILns8Xdc7TAScdCqD6ebi2uvhBmp9GIIOI7NQxS3pXM5b3dOP1R%2fCg%2b9reaLjsIjXuPnOQAdAgNLx7IjUgEsOvNyn9AgVIxoCOjQ%2bL7yAV7Wu%2f4LBCaj6VzGW5FUrjpLLJLmOK7RMUr6EJtWekiuLSMJ%2bJdENUiX2cnGxH0w%2b2RsHlLcpa&p=1&w=0&s=0'
        ],
      },
    ]
  },
  {
    country: "Оаэ",
    hotels: [
      {hotel: "MILLENNIUM PLACE DUBAI MARINA",
        dates: ["2025-09-11", "2025-08-15"],
        rating: 5,
        location: 'ОАЭ, Дубай',
        meal: 'Superior Room, Завтраки',
        nights: 7,
        passengers: 'на двоих',
        departure: 'из Москвы',
        package: 'Перелет включен',
        urls: [
          'https://www.coral.ru/hotels/united-arab-emirates/millennium-place-dubai-marina-dubai/?qp=lWOJw1XDa14WeujkN6zDTrQ7ouYEfFiIA5SfOn%2bM%2bL4pu2D6rL981ZpnDRklYAxTeIBNksNt6ZZcsNj0agbpM5d7wwt64dccPfPYpODQi9JXTkqB32v1VczfUFAS6j02JmjOQFzzIJsN3aFYfspTDBqXmu7NFw895lOhh0wX13tYNTwVSuadmlmD10RyuNQ9jL4x2CNQ8uO6jbNsihtuooWXOcAejfxPzQpEpW1Y9D0EFmJdkSvsILveuKF7FkhwIxugTKv9JRPn6xoAOGxi4Z06Oe0WWykQX88%2bBLH4Nh3tlfa%2friUQQKIpiueF2qfD%2f4lX20vlWBMgG8em5sOBkA%3d%3d&p=1&w=0&s=0',
          'https://www.coral.ru/hotels/united-arab-emirates/millennium-place-dubai-marina-dubai/?qp=lWOJw1XDa14WeujkN6zDTvIti%2bYixcUzGZWeTEhGb1ESTni%2fLzyihGwA5bpfycDrNGdsgSKcatR7CRySKnDy1KHLdgVHi9ZATsWWCfcptqjdqkHR3q4gxOsFsIjEst26AHWbSIWWPbTDYrHXpozjVZ4IbmnegR5cWOz4avTe4ft0bRd0N97JRujj1OyIburO%2fB76WNyjHQ05A1%2fYGAQHphv7O7IFyIsVPwBR5UEU1e%2bT%2b0dfOOfyehJxw%2f7yiyGZ2TpcW8%2bCLq26D1xOG4TszILgkmImYTEx%2fPTe3%2bjGwM78t0N94x%2bQK8%2btEzsQmx%2fH6hHfKASYX7LdBEawQ7LPqA%3d%3d&p=1&w=0&s=0'
        ],
      },


      {hotel: "GRAND MILLENNIUM DUBAI",
        dates: ["2025-08-06", "2025-09-08"],
        rating: 5,
        location: 'ОАЭ, Дубай',
        meal: 'Superior Room, Завтраки',
        nights: 7,
        passengers: 'на двоих',
        departure: 'из Москвы',
        package: 'Перелет включен',
        urls: [
          'https://www.coral.ru/hotels/united-arab-emirates/grand-millennium-dubai-dubai/?qp=lWOJw1XDa14WeujkN6zDTmKle8svv1R4IS%2feU5AMPraHEhQDaR8T%2bb1DgXDJloh06cYzKzVOdbYytCVEO6h%2bscO7gh8GgePm2UTqO2NtQKQNm1LbCK9aTlxPf5ptVrvA5JaTSrOmCl3o9W0tLia6nGMIcZ0YN4uECpNNGzZ5bnsYhiazDgq8Hd02MBJ0RM6NBAVTWDVBgkSg8%2fff4JfD3mtsdDn%2bclA2EjC6wmxu8osemth%2frybk8wyFevzBMJRvV7FlMqpyDgGUNX3unQ9rrc64TwGNT6MDVNeilkxtT847ZeVvLA0cXHjISYG%2b0csV&p=1&w=0&s=0',
          'https://www.coral.ru/hotels/united-arab-emirates/grand-millennium-dubai-dubai/?qp=lWOJw1XDa14WeujkN6zDTkP7yGXtxIqX8siVRADIGJE8kJhhhqkNcCx5zGZhpSeVM%2b8QNJ8cFvDGQfJnUQhZe4th1Ydc2ycpyEDoQSHp4M%2bRq90r%2fTpLb2jpmYBF1XcTwXqUGOoHosPvZLrjZq3JccUekBnLzEbEd1FTuk%2fQFmXV61o3gyZxuq4zcMO6sSt8iYBwvBL19CrNceBN8PYz7Zw3X0Y85WSqHhpy%2bDa8TWT77RT2g%2fR7EwaFi1ftTOKJtJtfMqjUFFX2KZphiL5olOYxyAXF8XAa1v5uUHRyg8BUgPLDJGJPUe8HXabBT02r&p=1&w=0&s=0'
        ],
      },


      {hotel: "STELLA DI MARE DUBAI MARINA",
        dates: ["2025-09-09", "2025-10-14"],
        rating: 5,
        location: 'ОАЭ, Дубай',
        meal: 'Deluxe Room Twin, Завтраки',
        nights: 7,
        passengers: 'на двоих',
        departure: 'из Москвы',
        package: 'Перелет включен',
        urls: [
          'https://www.coral.ru/hotels/united-arab-emirates/stella-di-mare-dubai-marina-dubai/?qp=lWOJw1XDa14WeujkN6zDTuKWoB%2fVSE5y6pp1szQIF1ag0YCkALP0G9x19aCOQbehPCTd6rmdjdOHS1CfiL7JcWFMVXrwM0FSJqI53nIKoQVxPoEe%2fTRVatADd%2f4b%2f7rALRSmE5e%2fxLO9QE5Lc5RIlw7Sk%2b%2b85sfw5nWLmYQeUgBrOsoOeeiktXeY7VchSn7CD4ymNGRjLKqzgmQXhxnif9oMIWMwoTCFKmz2zanHXDgqwkdPNJHW7KgJnG8nMNnsJgEHjiei4ifrp7H%2bii7pGoUte4E3QUS7Pgc9nJDsK5LG4UAkN4gv7iNk%2fu8dqU9t4erswtOBMfTWjLuefBcOTg%3d%3d&p=1&w=0&s=0',
          'https://www.coral.ru/hotels/united-arab-emirates/stella-di-mare-dubai-marina-dubai/?qp=lWOJw1XDa14WeujkN6zDTjhq75Bs68Ead29ir41pwOV9gaAzHuOsTv%2f7S3QoTxujSflqY0%2b5v%2b2JCENXKJ%2f6IgsdGOLUgvXs2oSFjZ8%2bZyQnG6bI9mXEF3OLDCHBZsoMD9WXwB2113RWWP3qDqnT4F1Mmq5sXpbENX2%2fZn2M0Rpuk7Gxrsw7RxqCG7t4WrfhW2ODu9jvFwN05tHw8sGbivhyt%2fQUqTAlBmXO3j98u3I47RXI3dNUGIrUiYlcAivD3judljxlWUWMdoKsfTRZNEXdO%2fiuacCZXqchXdsSHLDz%2fioQeWmWbDSwqiDLzJtqJa5I3YEh%2f5%2bAqsSKES822A%3d%3d&p=1&w=0&s=0'
        ],

      },
      {hotel: "CROWNE PLAZA DUBAI MARINA",
        dates: ["2025-09-10", "2025-10-09"],
        rating: 5,
        location: 'ОАЭ, Дубай',
        meal: 'Standard Room City View (King/Twin), Завтраки',
        nights: 7,
        passengers: 'на двоих',
        departure: 'из Москвы',
        package: 'Перелет включен',
        urls: [
          'https://www.coral.ru/hotels/united-arab-emirates/crowne-plaza-dubai-marina-dubai/?qp=lWOJw1XDa14WeujkN6zDThkCO%2byzBTie0%2ffnCw%2blmu6fL8VJFefJY%2fGWlLvzxpKt%2fuxDvTK9OSbL2jeczFIYmIdkr7eAqv%2bfX0ccOVo%2bMQkjWtkahsBenpQtxmBX3QpFr8kCpPlASn%2f2Tnw5RTST51l6giaoR1l4NsWIE9MXErOVT6Mk1jvCZ2ph5Iravkhpejm1GhlRf0bO54TaKaJerT5PRrBDkpRoIc%2bCf1Bk6nERkEamQNCcMcz4%2bxOtb8mzQEu660BLMGiAjvH2P2i6BDu0ua43XCBhWcWrlRa9ouxCGeF%2frKKwU6rOWO9VbzzcrjpfwRxWpRU0AwN0L5ufnA%3d%3d&p=1&w=0&s=0',
          'https://www.coral.ru/hotels/united-arab-emirates/crowne-plaza-dubai-marina-dubai/?qp=lWOJw1XDa14WeujkN6zDTm46whlAgMRbgssi%2b5nl72DamEeBN4zhbruRaYvTng3zVnkspSvhGVTVmjk7iwRSO5j5PmwLSdEm0U71xmeDEeQ0AHpw%2fRn8JnjPSV5V8k9w5JDGZFuaNkBEssoYzNBxuWXntZ9%2feVyGHByzFUao6TU5rkNqXSbQc%2byoA5gtDQw0u3cDEwXhcQMwmX1%2b1QxkT%2ftXjHIxeRAAJJYYpwIYwuOzZ5FbMVoFm6GDlD7IEBHlzikVXgowPDM7kC1SOH7gQVmF2wmNIR%2f9xpwlZOw9scCSNorYz%2b4Ekc81Yo9juy%2bCiu5OF3pWOaKm4%2f2srTpO%2bw%3d%3d&p=1&w=0&s=0'
        ],
      }
    ]
  },
  {
    country: "Египет",
    hotels: [
      {hotel: "ISLAND VIEW",
        dates: ["2025-09-11", "2025-10-01"],
        rating: 5,
        location: 'Египет, Шарм-эш-Шейх',
        meal: 'Standard Room, Все включено',
        nights: 7,
        passengers: 'на двоих',
        departure: 'из Москвы',
        package: 'Перелет включен',
        urls: [
          'https://www.coral.ru/hotels/egypt/island-view-sharm-el-sheikh/?qp=lWOJw1XDa14WeujkN6zDTrQ7ouYEfFiIA5SfOn%2bM%2bL4pu2D6rL981ZpnDRklYAxTeIBNksNt6ZZcsNj0agbpM5d7wwt64dccPfPYpODQi9JXTkqB32v1VczfUFAS6j02L5bWnKtlUlQediT0EcppFRME14foXzjET%2f6QoWDOEvEoH0LNxfX70Hz3CPOySrkvEct0JqSeMTVRtDahuZfreJ6qcoMhnehFPcuYkxe2LPocvjFi5moJggttuTZSTBUK3R1DV%2bWuk%2f7lEQK0bb6fsz2IILafK123f0iDfWIn08D%2ffqq42yEdIqnxZzM%2fYQ3I&p=1&w=0&s=0',
          'https://www.coral.ru/hotels/egypt/island-view-sharm-el-sheikh/?qp=lWOJw1XDa14WeujkN6zDTndepk4hoU3TW6CW5c4x5M91UT349JjfnXOZ5zcmPvDDG3tppvyTB9bpGkwKo0g9a%2fjDmZWdO7%2fi9WAmr0QoEafvoCsgA%2bGD0lpn8Xy%2fTwE%2b8osGFiIRZg0M50OieKUOspudprW9wu9jJSqiUeA%2fHr9yiEX69xsDuUObAJqFjKiDOrjFYduery1rO9H9pmfw%2bPSwtRmZBVb4ZcnNLeP2Iqakum%2b2DInyANxFVQpytuUzoPxx2jG0xikRWP4w66a5i2MAkH82jmT7QllnJ%2fpPE4JfaiTc041xvnQa5IsihRWO&p=1&w=0&s=0'
        ],
      },
      {hotel: "RIXOS PREMIUM SEAGATE",
        dates: ["2025-09-11", "2025-10-01"],
        rating: 5,
        location: 'Египет, Шарм-эш-Шейх',
        meal: 'Superior Room Aqua, Ультра все включено',
        nights: 7,
        passengers: 'на двоих',
        departure: 'из Москвы',
        package: 'Перелет включен',
        urls: [
          'https://www.coral.ru/hotels/egypt/rixos-premium-seagate-sharm-el-sheikh/?qp=lWOJw1XDa14WeujkN6zDTrQ7ouYEfFiIA5SfOn%2bM%2bL4pu2D6rL981ZpnDRklYAxTeIBNksNt6ZZcsNj0agbpM5d7wwt64dccPfPYpODQi9JXTkqB32v1VczfUFAS6j023IsgvDSMvchHrsoDbwpcIE1UpfZGl1EjHY%2bBQmuqFCubrZMFDNGTYZWyrfglFWAsUFh2Gi4AkAwki24tjjtme2R%2fe46T0FAdbjMna3723mk%2biKd6u%2bd092Mpvccob3hGezis9quZcCDr1OioDvw%2fPCbVB2MejP2zSWh1Mq24PP4I7ey%2bX6tNLc6%2bBcpupGm%2bqCPtt6X46g7O2KCSvTgGvg%3d%3d&p=1&w=0&s=0',
          'https://www.coral.ru/hotels/egypt/rixos-premium-seagate-sharm-el-sheikh/?qp=lWOJw1XDa14WeujkN6zDTndepk4hoU3TW6CW5c4x5M91UT349JjfnXOZ5zcmPvDDG3tppvyTB9bpGkwKo0g9a%2fjDmZWdO7%2fi9WAmr0QoEafvoCsgA%2bGD0lpn8Xy%2fTwE%2bj0GH29HOKZNWX7n0WLkeGjz1khxFVgKVrlKtFGRK%2fxgyhmnHzV7S6kUlp5LqbjNvkSQSy79crl1FcA0W8XMrtvO8pT1NTqBAyxtAEhKdgPBDviTiIn%2bsol5K0I%2fkti7L1mEWExXWbahcFCmXYjmx5YIg86Ajol%2fOgbvj16Hg%2fiV721OPtmx%2fmcLChqXXkNtlgq9vdEQTixsdX9VXsX6WFg%3d%3d&p=1&w=0&s=0'
        ],
      },
      {hotel: "CONCORDE EL SALAM SPORT AREA",
        dates: ["2025-09-08", "2025-10-01"],
        rating: 5,
        location: 'Египет, Шарм-эш-Шейх',
        meal: 'Standard Garden-Pool View Room, Все включено',
        nights: 7,
        passengers: 'на двоих',
        departure: 'из Москвы',
        package: 'Перелет включен',
        urls: [
          'https://www.coral.ru/hotels/egypt/concorde-el-salam-sport-area-sharm-el-sheikh/?qp=lWOJw1XDa14WeujkN6zDTkP7yGXtxIqX8siVRADIGJE8kJhhhqkNcCx5zGZhpSeVM%2b8QNJ8cFvDGQfJnUQhZe4th1Ydc2ycpyEDoQSHp4M%2bRq90r%2fTpLb2jpmYBF1XcTw8xUndTbz7poUizwHUhgM50Yb3fPkA9idyREQQoJBF9%2feysT%2f6LlcLKSYyxnj2YeTjwHnnu%2fHAvOoo%2fB7lYf%2fwTW5T4DRMQywcdl4rX0H51LaxLskHX7g%2bMiMxptx4Sggnea69dQjhHkb%2b8Wb7ZttW%2f%2fVKsk8qDaUg8UH0daFkmQ1GM0Vh84%2bK579qdnyEdA&p=1&w=0&s=0',
          'https://www.coral.ru/hotels/egypt/concorde-el-salam-sport-area-sharm-el-sheikh/?qp=lWOJw1XDa14WeujkN6zDTndepk4hoU3TW6CW5c4x5M91UT349JjfnXOZ5zcmPvDDG3tppvyTB9bpGkwKo0g9a%2fjDmZWdO7%2fi9WAmr0QoEafvoCsgA%2bGD0lpn8Xy%2fTwE%2b0SZelWPu8mPj0M7kX2tBQb33tsTKUW3HIqGU86eW4Znwn%2fYvMx0dGixKon23HHMK6uloK3V22Wwnlj9t5HW7wNUAIIPevPUtABIJ09u8zanN5GWPa%2f%2fQ7w%2bEodpxI6xOs0OWu8x5DX7B4NGBYU8%2fzAdPOqyaI5T2W0D5lJ9jIEV%2bkxyK0H5Ua4pKBz4nhEoW&p=1&w=0&s=0'
        ],
      },
      {hotel: "BARON RESORT SHARM EL SHEIKH",
        dates: ["2025-09-08", "2025-10-01"],
        rating: 5,
        location: 'Египет, Шарм-эш-Шейх',
        meal: 'Superior Room Classic, Премиум «все включено»',
        nights: 7,
        passengers: 'на двоих',
        departure: 'из Москвы',
        package: 'Перелет включен',
        urls: [
          'https://www.coral.ru/hotels/egypt/baron-resort-sharm-el-sheikh-sharm-el-sheikh/?qp=lWOJw1XDa14WeujkN6zDTkP7yGXtxIqX8siVRADIGJE8kJhhhqkNcCx5zGZhpSeVM%2b8QNJ8cFvDGQfJnUQhZe4th1Ydc2ycpyEDoQSHp4M%2bRq90r%2fTpLb2jpmYBF1XcTn4j1CaJBa4qpxCBde4NSWaThOICTP8nTwqCkewushnZKDoJvxTR1etUOMrETyjSuDSBQIZGLnEpsWZUkwjG3S6NqygBM20QXU86h%2fMkHruvZCI6UQ8qngJpOOu%2foAzitqXAJe%2bjgBOXpr5yfutnLhCxnLAJ1u42d0NkCllOB%2bXAPYqreIXxNy3XiPHz8NcOM&p=1&w=0&s=0',
          'https://www.coral.ru/hotels/egypt/baron-resort-sharm-el-sheikh-sharm-el-sheikh/?qp=lWOJw1XDa14WeujkN6zDTndepk4hoU3TW6CW5c4x5M91UT349JjfnXOZ5zcmPvDDG3tppvyTB9bpGkwKo0g9a%2fjDmZWdO7%2fi9WAmr0QoEafvoCsgA%2bGD0lpn8Xy%2fTwE%2b%2fo96%2frJGu%2bHbGZ5uUfqicjidddX6CIvF9j2jBzZAUxn2Df3I7XQXTeNN9qWbThFG55JFLDGEA7adGgkXjOvNMiLFLrujXqxfALaPXluRT7qGbp8mG3EgNWBW4MB28WBjy8VpEo5DhMmJpeVwwnWdg6ndjvv2WiEhkB2MF%2bVe7AFwM2YDpaYlv%2bsComEIi165&p=1&w=0&s=0'
        ],
      },
    ]
  },
  {
    country: "Мальдивы",
    hotels: [
      {
        hotel: "MALAHINI KUDA BANDOS RESORT",
        dates: ["2025-08-14", "2025-09-12"],
        rating: 5,
        location: 'Мальдивы, Северный Мале Атолл',
        meal: 'Garden Room, Завтраки',
        nights: 7,
        passengers: 'на двоих',
        departure: 'из Москвы',
        package: 'Перелет включен',
        urls: [
          'https://www.coral.ru/hotels/maldives/malahini-kuda-bandos-resort-north-male-atoll/?qp=lWOJw1XDa14WeujkN6zDTk%2f8f0G2GBqPudPlgj7zhfAurTPRVW%2bLzSujgz%2bG1mqZXyHNhMd7qHk3MZAzoyadaQQqSR%2fLmeaT4CIui%2bHUjt4A79e5wPouk3C0%2b%2fb6XR%2bHDaFLuv8qFrdAGh6%2fQGvBNNiWc45ZsMFxzjdbvCRqqPKuEsWpDkiz%2fMj%2f0X3f%2bTZzA5tboLvfuGYzqLSQm9RDtR%2f%2fK1H4gxRRl7BwxTH0nF8RCcLgos%2bo23BP3T2c8mhd8XC3vQ4WGCQrW12x8%2flPrnrS%2fzNhjnLhTZ%2bDHw1MYUobTKR3k5G7Q%2fikFThiRDWx1PEuOIJjsCqvifneSEKi4Q%3d%3d&p=1&w=0&s=0',
          'https://www.coral.ru/hotels/maldives/malahini-kuda-bandos-resort-north-male-atoll/?qp=lWOJw1XDa14WeujkN6zDTqfj06UQZv3Ig1kbBr4%2fhum0RE2rp4ZTgU44FN4OKgl58TqWBzut32yPBqCMVTgIV1JPfpeGkwtUUQ6q69L2HNgSgXt43hycKfkU2dgYK81mQVzuajcvQdIcVf2xXdwZA4rt4pG4pmCyi3nD4JmFqrzqL6KEO7hA0VgcMKSg6Mfa0ID1TKDnv9CrTu7FnQh8hkShhEmBWKpgRWZKMm%2bgfYRMuhqL2jEP5oLAwITVIvFYl3qpe75NElLkBWP4ihjMdjGHXAslynwdUU%2fcGt7FNccPSQZP9FeVuZAu8trZhHLCoH8Vodjd5EVPPUz7p737BA%3d%3d&p=1&w=0&s=0'
        ],

      },
      {
        hotel: "VILLA NAUTICA, PARADISE ISLAND",
        dates: ["2025-08-14", "2025-09-12"],
        rating: 5,
        location: 'Мальдивы, Северный Мале Атолл',
        meal: 'Deluxe Beach Pool Villa, Полный пансион',
        nights: 7,
        passengers: 'на двоих',
        departure: 'из Москвы',
        package: 'Перелет включен',
        urls: [
          'https://www.coral.ru/hotels/maldives/villa-nautica-paradise-island-north-male-atoll/?qp=lWOJw1XDa14WeujkN6zDTk%2f8f0G2GBqPudPlgj7zhfAurTPRVW%2bLzSujgz%2bG1mqZXyHNhMd7qHk3MZAzoyadaQQqSR%2fLmeaT4CIui%2bHUjt4A79e5wPouk3C0%2b%2fb6XR%2bH%2fC5tCuC0oPqd6PPnqUv4FmLpRCqCoZA83OSnMNT8ftvp4lSr8Kr90vZZ2DSsW%2bN11aqX%2fsmcpH90UhTZ%2fJDXIGUax%2b2y66C7RYhODxNycMb3IrcHMOYGusg7S7WHGi9ck1jqoExzCBABdAUexQVcijF8YjtOtACGty2hwasnSxIAjzs%2byzGCjguXe5%2bsnCWj&p=1&w=0&s=0',
          'https://www.coral.ru/hotels/maldives/villa-nautica-paradise-island-north-male-atoll/?qp=lWOJw1XDa14WeujkN6zDTqfj06UQZv3Ig1kbBr4%2fhum0RE2rp4ZTgU44FN4OKgl58TqWBzut32yPBqCMVTgIV1JPfpeGkwtUUQ6q69L2HNgSgXt43hycKfkU2dgYK81miHGznWDtU4uIM8pHuXtRWptb9%2fAKqPJXwiERV40uURnNEfZt6fdOYl5RkneLerFuVZ96b17rU2vtAhcC4nyyJUHFSh6nNqukx%2f7ns2w5zwcSzMgZlYWWJHwMn1at9zCylofcGMs4uEtFtK00eGbU%2fdI43sommH50T9F4yekzCt0YKXdO01ljypV4BPfIB6Dg&p=1&w=0&s=0'
        ],
      },
      {
        hotel: "KURUMBA MALDIVES",
        dates: ["2025-08-29", "2025-09-08"],
        rating: 5,
        location: 'Мальдивы, Северный Мале Атолл',
        meal: 'Superior Room, Завтраки',
        nights: 7,
        passengers: 'на двоих',
        departure: 'из Москвы',
        package: 'Перелет включен',
        urls: [
          'https://www.coral.ru/hotels/maldives/kurumba-maldives-north-male-atoll/?qp=lWOJw1XDa14WeujkN6zDTvamOs0%2fLiM2MVJBV4F4VNKpzX7GWUqJkli1JwpBDOmzCyGHe469Cyh38Ft%2ffukXKbMsEPD%2fTLa2oGEKJq%2fgT9AbbegPIvponiNxUEataNzR4wCWpu3W8q0ePFAGXAC5huwB2Kuga8sDS0e7bPxXxDE2XlUvuKlTsbopvCzZvjgaGZn8PA5rgNb9fdhNvaXZ4CgGyd0zGwJ%2f0SA%2b6YyzJ%2bRzfxRxeyOd5q9pKIv2Gi8wOj9kVjnifx648PDdkKgt5G0b9qOC9WMTbK8NIvIHElfwQgxZcRYk%2baLj%2bUAT6G8%2f&p=1&w=0&s=0',
          'https://www.coral.ru/hotels/maldives/kurumba-maldives-north-male-atoll/?qp=lWOJw1XDa14WeujkN6zDTkP7yGXtxIqX8siVRADIGJE8kJhhhqkNcCx5zGZhpSeVM%2b8QNJ8cFvDGQfJnUQhZe4th1Ydc2ycpyEDoQSHp4M%2bRq90r%2fTpLb2jpmYBF1XcTElL82%2boRfOCjiNBXhq2XnVZeEIjowSr%2bTtOuhwJa40pMVvP0NDY2Wdt%2fWa6n5NAVDWYhIhgizWZ7bvehX6rRK081zlxC7En0hg0PXgWm%2fYLRbyX7R%2fozJxNN6qZ9dqUNIUZzfOgFB2eRcUzoLCzBNTjVNVkyr1TSrDnuQhMvrlfzRGCkc1HZvJbxhDvjynSi&p=1&w=0&s=0'
        ],
      },
      {
        hotel: "VELASSARU MALDIVES",
        dates: ["2025-08-29", "2025-09-08"],
        rating: 5,
        location: 'Мальдивы, Северный Мале Атолл',
        meal: 'Deluxe Villa, Завтраки',
        nights: 7,
        passengers: 'на двоих',
        departure: 'из Москвы',
        package: 'Перелет включен',
        urls: [
          'https://www.coral.ru/hotels/maldives/velassaru-maldives-south-male-atoll/?qp=lWOJw1XDa14WeujkN6zDTvamOs0%2fLiM2MVJBV4F4VNKpzX7GWUqJkli1JwpBDOmzCyGHe469Cyh38Ft%2ffukXKbMsEPD%2fTLa2oGEKJq%2fgT9AbbegPIvponiNxUEataNzRw0NXQ%2bZW7ixtcMSLXtyNLhFjLKp9CGqJpas0sj5xQ9nrJR0ZyCmT7gSZDYm%2bl7BUAYxUeiEuWzI2EQyrK1L85urts79OkjOErdWvBkEmA8o4tdeu0u3aUzBweFlfClsYkQzUU4pv%2bZc7ckh1sIATZHBIWH%2fBDbXve5JFtTMl8DKQrtRkP1iiSL%2fy3RbAD0rq&p=1&w=0&s=0',
          'https://www.coral.ru/hotels/maldives/velassaru-maldives-south-male-atoll/?qp=lWOJw1XDa14WeujkN6zDTkP7yGXtxIqX8siVRADIGJE8kJhhhqkNcCx5zGZhpSeVM%2b8QNJ8cFvDGQfJnUQhZe4th1Ydc2ycpyEDoQSHp4M%2bRq90r%2fTpLb2jpmYBF1XcTppsP80qVxeUu%2bx5DnWVk9kSPFDShBlDUGycOVwahGvr2xQspFOHB3Pvl0%2bWJ27ztK0x%2bWNwJmsgnn0xhAc69jclAPPRYUyw94po5bYrFjGxftKnmH8mDX7akOqYR%2fNF4WndAOrdijeV6v4%2bfqAzUmJB%2fDM7xzF%2frwjccqz0h7ksw3M9uogzW0%2bNNCX7S6zEq&p=1&w=0&s=0'
        ],
      },
    ]
  }
];

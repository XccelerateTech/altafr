var asia = {
    countries: {
        India: {
            Mumbai: {
                population: 18.5
            }
        },
        China: {
            Beijing: {
                population: 21.5
            },
            "Hong Kong": {
                population: 7.3
            },
        }
    }
}

//1)
console.log(asia.countries.India.Mumbai.population)

//2)
console.log(asia.countries.China.Beijing.population)

//3)
console.log(asia.countries.China['Hong Kong'].population)
type CountryType = {
    name: string,
    code: string
}

const countries : CountryType[] = [
    {"name" : "Argentina", "code" : "ARG"},
    {"name" : "Brasil", "code" : "BRS"},
    {"name" : "Chile", "code" : "CHL"},
    {"name" : "México", "code" : "MEX"},
    {"name" : "España", "code" : "ESP"},
    {"name" : "Francia", "code" : "FRA"},
    {"name" : "Italia", "code" : "ITA"},
    {"name" : "Alemania", "code" : "DEU"},
    {"name" : "Japón", "code" : "JAP"},
    {"name" : "Canadá", "code" : "CAN"},
]

async function getCountries(): Promise<CountryType[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(countries);
        }, 1500);
    });
}

async function getCountry(id : string): Promise<CountryType> {
    const countryToReturn = countries.find((country) => country.code === id);
    if (!countryToReturn) throw new Error('Country not found');
    return countryToReturn;
}

export {
    getCountries,
    getCountry
}

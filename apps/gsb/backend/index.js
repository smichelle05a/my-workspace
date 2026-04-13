const countries = [
    { "name": "Argentina", "code": "ARG" },
    { "name": "Brasil", "code": "BRS" },
    { "name": "Chile", "code": "CHL" },
    { "name": "México", "code": "MEX" },
    { "name": "España", "code": "ESP" },
    { "name": "Francia", "code": "FRA" },
    { "name": "Italia", "code": "ITA" },
    { "name": "Alemania", "code": "DEU" },
    { "name": "Japón", "code": "JAP" },
    { "name": "Canadá", "code": "CAN" },
];
async function getCountries() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(countries);
        }, 1500);
    });
}
// @ts-ignore
async function getCountry(id) {
    return {};
}
export { getCountries, };

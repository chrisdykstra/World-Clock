
function setWeatherDataFromAPI() {

    let citiesDropDown = document.getElementById("citiesdropdown");
    let option = citiesDropDown.options[citiesDropDown.selectedIndex];
    let textContent = option.textContent;
    let startIndex = textContent.indexOf(":") + 2;
    let city = textContent.slice(startIndex);
    let countryCode;

    for (let row of rowsFromDB) {

        if (row.city == city) {
            countryCode = row.countrycode;
        }

    }

    let url =
        "https://api.weatherbit.io/v2.0/current?city=" + city + "&country=" + countryCode + "&key=8f8e5bd5bd6c4e1dbc65b85334bf6b78";

    request(url, function (error, response, body) {
        let data = JSON.parse(body)["data"][0];
        console.log(data);
    });
}

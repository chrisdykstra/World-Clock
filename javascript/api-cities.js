
function setInformationOfCity() {
    setTimeOfCity();
    setWeatherDataFromAPI();
}

function showCitiesInDropdownList() {

    let citiesDropDown = document.getElementById("citiesdropdown");

    for (let i = 0; i < rowsFromDB.length; i++) {

        let cityList = document.createElement("option");  // createElement only takes in tag names
        cityList.setAttribute('value' , rowsFromDB[i].continent);
        cityList.textContent = rowsFromDB[i].country +' : ' + rowsFromDB[i].city;
        citiesDropDown.appendChild(cityList);
    }
}

//--------------------------------------------------
function setTimeOfCity() {

    let citiesDropDown = document.getElementById("citiesdropdown");
    let option = citiesDropDown.options[citiesDropDown.selectedIndex];
    let textContent = option.textContent;
    let startIndex = textContent.indexOf(":") + 2;
    let city = textContent.slice(startIndex);
    let continent = option.getAttribute('value');
    let continentAndCity = continent + '/' + city;
    getCityInformation(continentAndCity);
}

function getCityInformation(continentAndCity) {

    let url = "http://worldtimeapi.org/api/timezone/" + continentAndCity + ".txt";
        console.log(url);
    request(url, function (error, response, body) {
        console.log(body);
        //First split the information into lines by \n. New Line.
        let timeInfo = body.split('\n');
        let timeWithoutDate = timeInfo[2];
        //Next choose your beginning and ending indexes within the row.
        let beginningIndex = timeWithoutDate.indexOf("T") + 1; //The beginning index is not included in the printed results.
        let endingIndex = timeWithoutDate.indexOf("."); //As long as the formatting from the server doesn't change, this will remain.
        //Now create a substring within this string to separate out the hours, minutes, and seconds.
        let digitalTiime = timeWithoutDate.slice(beginningIndex, endingIndex);
        timeDenomination = digitalTiime.split(":"); //separates out hours : minutes : seconds.
        h = Number (timeDenomination[0]);
        m = Number (timeDenomination[1]);
        s = Number (timeDenomination[2]);

        
        startTime();
    })

}
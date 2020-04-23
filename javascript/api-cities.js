


function retrieveDropDownCities() {

    let url = "http://worldtimeapi.org/api/timezone";

    request(url, function (error, response, body) {
        let yoshi = JSON.parse(body);
        showCitiesInDropdownList(yoshi);
    });
}
retrieveDropDownCities();
// ----------------------------------------------
function showCitiesInDropdownList(yoshi) {

    let citiesDropDown = document.getElementById("citiesdropdown");

    for (let i = 0; i < yoshi.length; i++) {

        let cityList = document.createElement("option");  // createElement only takes in tag names
        // <option></option>
        cityList.setAttribute('value', yoshi[i]);
        // <option value="Africa/Bissau"></option>
        cityList.innerHTML = yoshi[i];
        // <option value="Africa/Bissau">Africa/Bissau</option>
        citiesDropDown.appendChild(cityList);
        ///////////////////////////////////////////////////////////////////

        // let cityList = document.createElement("a");
        // cityList.setAttribute('value', yoshi[i]);
        // cityList.innerHTML = yoshi[i];
        // citiesDropDown.appendChild(cityList);

    }
}
//--------------------------------------------------
function setTimeOfCity() {

    let citiesDropDown = document.getElementById("citiesdropdown");
    let optionIndex = citiesDropDown.selectedIndex;
    let cityName = citiesDropDown.options[optionIndex].value;
    getCityInformation(cityName);
}

function getCityInformation(cityName) {

    let url = "http://worldtimeapi.org/api/timezone/" + cityName + ".txt";

    request(url, function (error, response, body) {
        //First split the information into lines by \n. New Line.
        let timeInfo = body.split('\n');
        let timeWithoutDate = timeInfo[2];
        //Next choose your beginning and ending indexes within the row.
        let beginningIndex = timeWithoutDate.indexOf("T") + 1; //The beginning index is not included in the printed results.
        let endingIndex = timeWithoutDate.indexOf("."); //As long as the formatting from the server doesn't change, this will remain.
        //Now create a substring within this string to separate out the hours, minutes, and seconds.
        let digitalTiime = timeWithoutDate.substring(beginningIndex, endingIndex);
        timeDenomination = digitalTiime.split(":"); //separates out hours : minutes : seconds.
        h = Number (timeDenomination[0]);
        m = Number (timeDenomination[1]);
        s = Number (timeDenomination[2]);

        
        startTime();
    })

}
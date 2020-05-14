
const request = require('request');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('clockdb.db');

let timeDenomination;
let h;
let m;
let s;
let meridian = "";
let expectedListOfTables = ["cities"];
let rowsFromDB = [];

db.serialize(() => {
    dropTable();
    createTable();
    insertDataAll();
    selectData();
});

function dropTable() {

    db.run("DROP TABLE cities", function (error) {
        if (error) {
            console.log(error);
        }
    });
}

function createTable() {
    let createTableQuery = "CREATE TABLE cities (id INTEGER PRIMARY KEY AUTOINCREMENT, city TEXT, country TEXT, continent TEXT, countrycode TEXT)";
    db.run(createTableQuery, function (error) {
        if (error) {
            console.log(error);
        }
        console.log("table 'cities' created");
    });
}

function insertDataAll() {

    let addCitiesToDB = `INSERT INTO cities (city, country, continent, countrycode) VALUES ( 'New York' , 'USA' , 'America' , 'US' ),
    ( 'London' , 'England' , 'Europe' , 'GB' ),
    ( 'Paris' , 'France' , 'Europe' , 'FR' ),
    ( 'Melbourne' , 'Australia' , 'Australia' , 'AU' ),
    ( 'Dubai' , 'UAE' , 'Asia' , 'AE' ),
    ( 'Moscow' , 'Russia' , 'Europe' , 'RU' )`;

    db.run(addCitiesToDB, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

function insertData(insertedCity, insertedCountry) {

    let addCitiesToDB = `INSERT INTO cities (city, country, continent, countrycode) 
    VALUES ( '${insertedCity}' , '${insertedCountry}' , '${insertedCountryCode}' )`;

    db.run(addCitiesToDB, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

function selectData() {

    db.all("SELECT * from cities", (error, rows) => {
        if (error) {
            console.log("Unable to Get Data");
        }
        else {
            rowsFromDB = rows;
            showCitiesInDropdownList();
        }
    });
}

function getTimeForSpecificCity() {

    db.all("SELECT city FROM cities WHERE city = *", (error, rows) => {

        let url = "http://worldtimeapi.org/api/timezone";

        request(url, function (error, response, body) {
        });
    });
}

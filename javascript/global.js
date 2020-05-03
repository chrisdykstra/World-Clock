
const request = require('request');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('clockdb.db');

let timeDenomination;
let h;
let m;
let s;
let meridian = "";
let expectedListOfTables = ["cities"];

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
    let createTableQuery = "CREATE TABLE cities (id INTEGER PRIMARY KEY AUTOINCREMENT, city TEXT, country TEXT, continent TEXT)";
    db.run(createTableQuery, function (error) {
        if (error) {
            console.log(error);
        }
        console.log("table 'cities' created");
    });
}

function insertDataAll() {

    let addCitiesToDB = `INSERT INTO cities (city, country, continent) VALUES ( 'New York' , 'USA' , 'America' ),
    ( 'London' , 'England' , 'Europe' ),
    ( 'Paris' , 'France' , 'Europe' ),
    ( 'Melbourne' , 'Australia' , 'Australia' ),
    ( 'Dubai' , 'UAE' , 'Asia' ),
    ( 'Moscow' , 'Russia' , 'Europe' )`;

    db.run(addCitiesToDB, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

function insertData(insertedCity, insertedCountry) {

    let addCitiesToDB = `INSERT INTO cities (city, country, continent) VALUES ( '${insertedCity}' , '${insertedCountry}' )`;

    db.run(addCitiesToDB, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

function selectData() {

    db.all("SELECT * from cities", (error, rows) => {
        if (error)
            console.log("Unable to Get Data");
        else
            showCitiesInDropdownList(rows);

    });
}

function getTimeForSpecificCity() {

    db.all("SELECT city FROM cities WHERE city = *", (error, rows) => {

        let url = "http://worldtimeapi.org/api/timezone";

        request(url, function (error, response, body) {
        });
    });
}

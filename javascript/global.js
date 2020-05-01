
const request = require('request');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('clockdb.db');

let timeDenomination;
let h;
let m;
let s;
let meridian = "";
let expectedListOfTables = ["cities"];
let createTableQuery = "CREATE TABLE cities (id INTEGER PRIMARY KEY AUTOINCREMENT, city TEXT, country TEXT)";

db.serialize(() => {
    dropTable();
    createTable();
    insertData();
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

    db.run(createTableQuery, function (error) {
        if (error) {
            console.log(error);
        }
        console.log("table 'cities' created");
    });
}

function insertData() {

    let addCitiesToDB = "INSERT INTO cities (city, country) VALUES ('New York', 'USA')";

    db.run(addCitiesToDB, (err) => {
        if (err) {
            console.log("Unable to Insert Data");
        }
    });
}

function selectData() {

    db.all("SELECT * from cities", (error, table) => {
        if (error) {
            console.log("Unable to Get Data");
        } else {
            console.log(table);
        }
    });
}

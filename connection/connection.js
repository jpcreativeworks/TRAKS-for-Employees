const mysql = require("mysql");

let connecting = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Webgirl527!",
    database: "business_db"
});

connecting.connect(function (err) {
    if (err) throw err;
    console.log("Looks like you're connected as ID: " + connecting.threadId + "\n");    
});

module.exports = connecting
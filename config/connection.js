// inside the connection.js file, setup the code to connect Node to MySQL.
// Export the connection.
// houses mysql connection data

var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"burgers_db"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id: "+connection.threadid);
});

module.exports = connection;


const mysql = require("mysql2")
 
const config = {
    host: "127.0.0.1",
    database: 'rcgenuser',
    user: 'root',
    password: 'rcgen44',
    connectionLimit: 100
}
 
const connection = mysql.createConnection(config)
 
connection.connect(function(err) {
    if (err) throw(err);
    console.log("Connected!");
});
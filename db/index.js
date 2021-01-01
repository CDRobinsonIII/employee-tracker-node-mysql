const connection = require("./connection");
var consoletable = require("console.table");

connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.table(res);
});

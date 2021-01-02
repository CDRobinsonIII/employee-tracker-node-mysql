const connection = require("./connection");
// require("console.table");

class DB {

    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployees() {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name"
        );
    }
}

module.exports = DB;

// connection.query("SELECT * FROM employee", function (err, res) {
//     if (err) throw err;
//     console.table(res);
// });

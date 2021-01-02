const { prompt } = require("inquirer");

const logo = require("asciiart-logo");

const db = require("./db");

const connection = require(".//db/connection");

require("console.table");

init();

function init() {
    const logoText = logo({ name: "Employee Manager" }).render();

    console.log(logoText);

    loadMainPrompts();
}

async function loadMainPrompts() {
    const { choice } = await prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                },

                {
                    name: "View All Employees By Department",
                    value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
                },

                {
                    name: "View All Employees By Manager",
                    value: "VIEW_EMPLOYEES_BY_MANAGER"
                },

                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE"
                },

                {
                    name: "Remove Employee",
                    value: "REMOVE_EMPLOYEE"
                },

                {
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEE_ROLE"
                },

                {
                    name: "Update Employee Manager",
                    value: "UPDATE_EMPLOYEE_MANAGER"
                },

                {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                },

                {
                    name: "Add Roles",
                    value: "ADD_ROLES"
                },

                {
                    name: "Remove Role",
                    value: "REMOVE_ROLE"
                },

                {
                    name: "View All Depoartments",
                    value: "VIEW_DEPARTMENTS"
                },

                {
                    name: "Add Departments",
                    value: "ADD_DEPARTMENT"
                },

                {
                    name: "Remove Departments",
                    value: "REMOVE_DEPARTMENT"
                },

                {
                    name: "Quit",
                    value: "QUIT"
                }

            ]
        }
    ]);

    switch (choice) {
        case "VIEW_EMPLOYEES":
            return viewEmployees();
        case "VIEW_EMPLOYEES_BY_DEPARTMENT":
            return viewEmployeesByDepartment();
        case "VIEW_EMPLOYEES_BY_MANAGER":
            return viewEmployeesByManager();
        case "ADD_EMPLOYEE":
            return addEmployee();
        case "REMOVE_EMPLOYEE":
            return removeEmployee();
        case "UPDATE_EMPLOYEE_ROLE":
            return updateEmployeeRole();
        case "UPDATE_EMPLOYEE_MANAGER":
            return updateEmployeeManager();
        case "VIEW_DEPARTMENTS":
            return viewDepartments();
        case "ADD_DEPARTMENT":
            return addDepartment();
        case "REMOVE_DEPARTMENT":
            return removeDepartment();
        case "VIEW_ROLES":
            return viewRoles();
        case "ADD_ROLE":
            return addRole();
        case "REMOVE_ROLE":
            return removeRole();
        default:
            return quit();
    }
}

async function viewEmployees() {

    let query = 
    `SELECT 
        employee.id, 
        employee.first_name, 
        employee.last_name, 
        role.title, 
        department.name AS department, 
        role.salary, 
        CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    LEFT JOIN role
        ON employee.role_id = role.id
    LEFT JOIN department
        ON department.id = role.department_id
    LEFT JOIN employee manager
        ON manager.id = employee.manager_id`

    await connection.query(query, (err, res)=>{
    if (err) throw err;
    console.table(res);
    loadMainPrompts();
    });
}

// async function viewEmployees() {
//     const employees = await db.findAllEmployees();
//     console.log("Hello - they want to view all employees.");
//     console.log("\n");
//     console.table(employees);

//     loadMainPrompts();
// }
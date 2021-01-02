const { prompt } = require("inquirer");

const logo = require("asciiart-logo");

const db = require("./db");

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
}
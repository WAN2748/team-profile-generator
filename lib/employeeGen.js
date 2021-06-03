const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Manager = require('./manager');
const Intern = require('./intern');
const inquirer = require('inquirer');
const fs = require('fs');


let newEmployee = [];

init = () => {
    //createHtml();
    addEmpolyee();
}
addEmpolyee = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter employee's name"

    },
    {
        type: "list",
        name: "role",
        message: "Select employee role",
        choices: [
            "Engineer",
            "Intern",
            "Manager",
            "Employee"
        ],

    },
    {
        type: "input",
        name: "id",
        message: "Enter employee id"
        
    },
    {
        type: "input",
        name: "email",
        message: "Enter employee email address"
        
    }
])

        .then = ({ name, role, id, email }) => {
            let roleInfo;
            if (role === "Engineer") {
                roleInfo = "GitHub username";
            } else if (role === "Intern") {
                roleInfo = "School Name";
            } else {
                roleInfo = "Office Phone Number";
            }
            inquirer.prompt([
                {
                    message: `Enter employee ${roleInfo}`,
                    name: "roleInfo"
                },
                {
                    type: "list",
                    message: "Would you like to add more employees?",
                    name: "addMoreEmployees",
                    choices: [
                        "yes",
                        "no"
                    ],
                }
            ])
                .then = () => {
                    roleInfo,
                    moreEmployees
                };
            let newWorker;
            if (role === "Engineer") {
                newWorker = new Engineer(name, email, id, roleInfo);
            }
            else if (role === "Intern") {
                newWorker = new Intern(name, id, email, roleInfo);
            } else {
                newWorker = new Manager(name, id, email, roleInfo);
            }
            newEmployee.push(newWorker);
            createHtml(newWorker).then = () => {
                if (moreEmployees === "yes") {
                    addEmployee();
                } else {
                    endHtml();
                }
            };
        };
};




module.exports = init()
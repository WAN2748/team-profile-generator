const Employee = require('./lib/employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');


let newEmployee = [];


 
   
addEmployee = () => {
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter employee's name",
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }

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
            let roleInfo = "";
            if (role === "Engineer") {
                inquirer.prompt([
                    {
                    message: "Enter Github username",
                    name: "GitHubUserName",
                    type: input
                    }
                ])
                roleInfo = "GitHubUserName";
                
            } else if (role === "Intern") {
                inquirer.prompt([
                    {
                    name: "schoolName",
                    type: input,
                    message: "Enter school name",
                    
                    }
                ])
                roleInfo = "SchoolName";
            } else {
                roleInfo = "Office Phone Number";
                inquirer.prompt([
                    {
                    message: "Enter offic number",
                    name: "OfficePhoneNumber",
                    type: input
                    }
                ])
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
                } /*else {
                    endHtml();*/
                }
            };
        };


        addEmployee();

/*const employeeGen = require("./lib/employeeGen")

const EmployeeGen = new employeeGen();

employeeGen.init();*/

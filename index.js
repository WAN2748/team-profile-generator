const Employee = require('./lib/employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util'); 

const writeFileAsync = util.promisify(fs.writeFile);

let newEmployee = [];




const addEmployee = () => {
   return inquirer.prompt([
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
            type: "number",
            name: "id",
            message: "Enter employee id"

        },
        {
            type: "input",
            name: "email",
            message: "Enter employee email address"

        }
    ])

        .then (({ role, id, email, name, github, officeNumber }) => {
            
            let roleInfo = "";
            if (role === "Engineer") {

                roleInfo = "GitHub user name";

            } else if (role === "Intern") {
                roleInfo = "School name";
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

            .then (({roleInfo, addMoreEmployees}) => {
                let moreEmployees;
                if (role === "Engineer") {
                    moreEmployees = new Engineer(name, id, email, roleInfo);
                } else if (role === "Intern") {
                    moreEmployees = new Engineer(name, id, email, roleInfo);
                } else (role === "Manager") 
                    moreEmployees = new Engineer(name, id, email, roleInfo);
                
                newEmployee.push(addMoreEmployees);
                generateHTML(addMoreEmployees);
            })

            .then ((addMoreEmployees) => {
                if (addMoreEmployees === "yes") {
                    addEmployee();
                } else (addMoreEmployees === "no") 
                    generateHTML();
                    console.log("thank you!")
                
            }
            )
        });
};

 generateHTML = (answer) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.0.1/journal/bootstrap.min.css" 
  integrity="sha512-nkF1DDLh7XyAdSuLszW4qKJmWiQqPG+G+ysYXZ7nno8Be4qlufWmEVx/DzBvlOLgYTvy/oswPSqfxK7bwj7KTQ==" 
  crossorigin="anonymous" referrerpolicy="no-referrer" />
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Team Members</h1>
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${answer.name}</h5>
    <ul class="list-group">
    <li class="list-group-item">Employee ID: ${answer.id}</li>
    <li class="list-group-item">Email: ${answer.email}</li>
  </ul>
  </div>
</div>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answer.github}</li>
      <li class="list-group-item">LinkedIn: ${answer.officeNumber}</li>
    </ul>
  </div>
</div>
</body>
</html>`
};


const init = () => {
    addEmployee()
      .then((answer) => writeFileAsync('index.html', generateHTML(answer)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
//   init();

/*const employeeGen = require("./lib/employeeGen")

const EmployeeGen = new employeeGen();

employeeGen.init();*/

init()

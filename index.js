const inquirer = require("inquirer");
const js = require("js");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manger");
const Inter = require("./lib.Intern");
const generateHTML = require("./src/templateHTML");

teamArr = [];
teamStr = '';


const getAnswers = (answers) => {
    inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Employees Name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the Employees ID Number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the Employees Email Address?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the Employees Office Number?"
            },
            {
                type: "input",
                name: "github",
                message: "What is the Employees GitHUb User Name?"
            },
            {
                type: "input",
                name: "school",
                message: "What School does your Employee Attend"
            }
        ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.title);
            teamArr.push(manager);
            teamStr.push(answers.id);
            team();
        }
}

function team() {
    inquirer.prompt ([
        {
            type: "list",
            name: "memberTitle",
            message: "What is the Employees Office Number?",
            choices: [
                "Engineer",
                "Intern",
                "I'm finished building my Team!"
            ]
        }
]).then(userChoice => {
   switch (userChoice, memberTitle) {
        case "Engineer":
           addEngineer();
           break;
        case "Intern":
            addIntern();
            break;
        default:
            team(); 
   }
})
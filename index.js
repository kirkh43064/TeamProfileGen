const inquirer = require("inquirer");
const js = require("js");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manger");



const getAnswers = (array) => {
    inquirer
        .prompt([
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
                type: "list",
                name: "title",
                message: "What is the Employees Office Number?"
                choices: [
                    "Engineer",
                    "Intern",
                    "I'm finished building my Team!"
                ]
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
        .then((array) => {

        }
};
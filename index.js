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


const getManager = (answers) => {
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
            }     
        ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.title);
            teamArr.push(manager);
            teamStr.push(answers.id);
            team();
        })
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
    switch (userChoice.memberTitle) {
        case "Engineer":
           addEngineer();
           break;
        case "Intern":
            addIntern();
            break;
        default:
            createTeam(); 
    }
})
}
function addEngineer() {
    inquirer.prompt ([
        {
            type: "input",
            name: "github",
            message: "What is the Employees GitHUb User Name?"
        }
    ])

    .then((answers) => {
        const engineer = new engineer(answers.name, answers.id, answers.email, answers.title, answers.github);
        teamArr.push(engineer);
        teamStr.push(answers.id);
        team();
        })

}

function addIntern() {
    inquirer.prompt([
    {
        type: "input",
        name: "school",
        message: "What School does your Employee Attend"
    }
    ])
    .then((answers) => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.title, answers.github);
    teamArr.push(intern);
    teamStr.push(answers.id);
    team();
    })
}

function createTeam() {
    
}
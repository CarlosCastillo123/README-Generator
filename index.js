// TODO: Include packages needed for this application
const fs = require('fs')
const path = require('path')
const inquirer = require("inquirer")
const generateMarkdown = require("./util/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of this program?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide short description about your app.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please add instilation instructions.',
        name: 'instilation'
    },
    {
        type: 'input',
        message: 'Insert how to use the application.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'List who contributed to this application.',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Provide instruction of how to test the program.',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Which license is this app under.',
        name: 'license',
        choices: ['MITLicense', 'GNU',
            'Apache'],
        default: 'MITLicense'
    },
    {
        type: 'input',
        message: 'Enter Gitub username.',
        name: 'questions'
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readme = generateMarkdown(answers)
            console.log(answers)
            writeToFile('README2.md', readme)
            // Use user feedback for... whatever!!
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give us a brief description of your project? (Required)',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is this project usage for?',
      },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Chose the appropriate license for this project:',
        choices: ['Apache', 'Academic', 'GNU', 'ISC', 'MIT', 'Mozilla', 'Open']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who are the contributors of this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Is there a test included?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your Github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email'
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const fs = require('fs');
const inquirer = require('inquirer');

const generatePage = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = () => {
    // using inquirer to prompt questions to user 
    return inquirer.prompt([
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
        type: 'list',
        name: 'license',
        message: 'Chose the appropriate license for this project:',
        choices: ['Apache', 'Academic', 'GNU', 'ISC', 'MIT', 'Mozilla']
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
]);
};

// function to write README file
const writeFile = data => {
    fs.writeFile(README.md, data, err => {
        // if there's an error
        if (err) {
            return console.log(err);
        } else {
            console.log("Your README has been created!")
        }
    });
};

// function to initialize app
questions()
//get user answers
.then(answers => {
    return generatePage(answers);
})
.then(data => {
    return writeFile(data);
})
//catch errors
.catch(err => {
    console.log(err)
})

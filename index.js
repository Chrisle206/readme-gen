//Allows program to use inquirer for the prompts and fs for writing the README.md file
const inquirer = require("inquirer");
const fs = require('fs');

//Prompts user with questions about what they would like to add into their README.md file
   inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your application?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Can you describe what your application does?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project??',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What would someone use this application for?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who helped contribute to this application?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How would someone use the test cases?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license would you like to use?',
            choices: ['MIT', 'GNU', 'Apache%202.0', 'BSD'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your github:',
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your email:",
        },
    ]).then((answers) => fs.writeFile('README.md',    //Generates README.md file with the answers to the questions
        `#${answers.title}
        https://img.shields.io/badge/license-${answers.license}-blue
    
        ## Description
        
        ${answers.description}
        
        ## Table of Contents
        
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)
        - [Questions](#questions)
        
        ## Installation
        
        ${answers.installation}
        
        ## Usage
        
        ${answers.usage}
        
        
        ## Credits
        
        ${answers.contribution}
        
        ## License
        
        This application is covered under the ${answers.license} license.
        
        ---
        
        ## Badges
        
        
        ## Features
        
        
        ## How to Contribute
        
        ## Tests
        
        ${answers.tests}
        
        ## Questions
    
        https://github.com/${answers.github}
        ${answers.email}`, (err) => err ? console.error(err) : console.log('Generating README.md file....') //Catches any errors and displays them to the user
    ));


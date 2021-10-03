// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
  function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Submit a project description!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Submit a project description!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation for this project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please describe!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps to install? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter each step!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How to use this READme Generator (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('How do I use the Generator!');
          return false;
        }
      }
    },
    {
      type: 'list',
      message: "Choose a license for your project.",
      choices: ['Apache License 2.0', 'Apache License 2.0', 'Apache License 2.0', 'Apache License 2.0',],
      name: 'license'
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Who contributed to this project? (Required)',
      validate: linkInput => {
        if (linkInput) {
          return true;
        } else {
          console.log('You need to enter contributing text!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'How did you test this READme Gen.? (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Enter here');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Do you have any questions? (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Enter an questions!');
          return false;
        }
      }
    },
        {
          type: 'input',
          name: 'email',
          message: 'Enter email address (Required)',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Enter an questions!');
              return false;
            }
      }
    },
  ])
}
  // TODO: Create a function to write README file
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
      if (err) {
        return console.log(err);
      }
      console.log('Your markdown file has been created.')
    });
  }

  // TODO: Create a function to initialize app
  async function init() {
    try {
      const userResponse = await promptUser();
      console.log(userResponse),
      await writeFileAsync(
        "./READme.md", 
        generateMarkdown(userResponse)
      );
      console.log(
        "Page created! Check out READme.md in this directory to see it!"
        );
      } catch (err) {
      console.log(err);
    }
  }
  // Function call to initialize app

   init();
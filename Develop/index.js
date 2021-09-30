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
      name: 'description',
      message: 'The what, why, and how (Required)',
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
      name: 'Installation',
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
      name: 'Usage',
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
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to contribute to this code?',
      default: true
    },
    {
      type: 'input',
      name: 'Contributting',
      message: 'Enter you contributing code here:',
      when: ({ confirmAbout }) => confirmAbout
    },
    {
      type: 'input',
      name: 'license',
      message: 'What license did you use? (Required)',
      validate: linkInput => {
        if (linkInput) {
          return true;
        } else {
          console.log('You need to enter a license!');
          return false;
        }
      }
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
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Did you test this project?',
      default: false
    },

    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Do you have any questions?',
      default: false
    },
    {
      type: 'input',
      name: 'Questions',
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
  ])
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
      await writeFileAsync(
        "./utils/generateMarkdown.md", 
        JSON.stringify(userResponse)
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
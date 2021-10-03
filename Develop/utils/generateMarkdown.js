function generateMarkdown(userResponses) {
  return `
(![Hex.pm](https://img.shields.io/hexpm/l/apa))

## My Project Title is  
${userResponses.title}

## Description (The what, why, and how:)
${userResponses.description}

## Motivation  
${userResponses.motivation}  

## Installation (Require steps to install and run)  
${userResponses.installation}

## Screenshot (taken during development)
Screenshot of my website
![Screenshot](./images/screenshot.jpg)
  
## Usage (How to use)
${userResponses.usage}

## License
${userResponses.license}
I simply used apache 2.0, other license types could be added 
to this list, I showed how this section works, 
user selects from a list, corresponding badge 
will also be displayed at the top of the page.

## Contribute
${userResponses.contribute}
  
## Tests (optional)
${userResponses.tests}

## Questions
${userResponses.questions}

Email me with questions: ${userResponses.email}

_This README was generated by: Josh McSwain

## GitHub Link
GitHub URL:  (https://github.com/mcswajl/READme-Gen)

`}

module.exports = generateMarkdown;
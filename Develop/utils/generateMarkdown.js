function generateMarkdown(userResponses, userInfo) {

  // Generate Table of Contents conditionally based on userResponses
  let TableofCnt = `## Table of Contents`;
  if (userResponses.installation !== '') { TableofCnt += `
  * [Installation](#installation)` };
  if (userResponses.usage !== '') { TableofCnt += `
  * [Usage](#usage)` };
  if (userResponses.contributing !== '') { TableofCnt += `
  * [Contributing](#contributing)` };
  if (userResponses.tests !== '') { TableofCnt += `
  * [Tests](#tests)` };


  // Generate markdown top README
  let genMarkdown = 
  `# ${userResponses.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/nielsenjared/badmath${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=for-the-badge")
     
  ## Description (The what, why, and how:)
  
  ${userResponses.description}
  `
  // Add Table of Contents to markdown
  genMarkdown += TableofCnt;
 
  // License section for Table of Contents
  genMarkdown += `
  * [License](#license)`;
  
  // Optional Installation section
  if (userResponses.installation !== '') {
  
  genMarkdown +=
  `
  ## Installation (Require steps to install and run)
  
  ${userResponses.installation}`
  };
  
  // Usage section
  if (userResponses.usage !== '') {
  
  genMarkdown +=
  
  `
  
  ## Usage (How to use)
  
  ${userResponses.usage}`
  };
  
  // Contributing section
  if (userResponses.contributing !== '') {
  `
  
  ## Contributing (Yes or No)
  
  ${userResponses.contributing}`
  };
  
  // Tests section
  if (userResponses.tests !== '') {
      genMarkdown +=
  `
  
  ## Tests (optional)
  ${userResponses.tests}`
  };


  // License section is required
  genMarkdown +=
  `
  
  ## License
  
  ${userResponses.license}
  `;


  // Questions / About Developer section
  // let Dev = 
  // `
  // ---
  
  // ## Questions?
  
  // ${userResponses.questions}
   
  // // For any questions, please contact me with the information below:
 
  // // draftDev +=
  // // `
  // // Email: ${userInfo.email}
  // // `};

  // // Add developer section to markdown
  // genMarkdown += Dev;

  // Return markdown
  // return genMarkdown;
  
}

module.exports = generateMarkdown;
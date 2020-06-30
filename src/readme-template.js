
module.exports = templateData => {
    console.log(templateData);
    const { about, ...readMe } = templateData;
    return `
# ${readMe.projectName}
## Table of Contents
-[Description](#Description)
-[Installation](#Installation)
-[Usage](#Usage)
-[Tests](#Tests)
-[Questions](#Questions)
-[Liscense](#Liscense)

## Description
    ${readMe.description}
## Installation
    ${readMe.installation}
## Usage
    ${readMe.usage}
## Tests
    ${readMe.testing}
## Questions
### If you have any questions you can:
### Email me at
    ${readMe.email}
### Or find me on my Github 
    https://github.com/${readMe.repo}
## Liscense
    ${readMe.liscense}
    `;
  };

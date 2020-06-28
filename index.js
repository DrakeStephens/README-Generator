const inquirer = require('inquirer')
const fs = require('fs');
const generatePage = require('./src/readme-template.js');

// const pageHTML = generatePage(portfolioData);
//const profileDataArgs = process.argv.slice(2)
//const [name, github] = profileDataArgs;
//fs.writeFile('./index.html', generatePage(name, github), err => {
  //  if(err) throw err;

//    console.log('Portolio complete! check out index.html to see the output!');
//})
const promptUser = () => {
return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is your projects name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your projects name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            validate: gitHubInput => {
                if (gitHubInput) {
                  return true;
                } else {
                  console.log('Please enter your GitHub Username!');
                  return false;
                }
              }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself: ',
            when: ({ confirmAbout }) => confirmAbout
        }
    ]);
};

const promptProject = portfolioData => {
    if (!portfolioData.projects) {
        portfolioData.projects = [];
      }
    console.log(`
    =================
    Add a new Project
    =================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a descritption of the project (Requeried)',
            validate: descritpionInput => {
                if (descritpionInput) {
                  return true;
                } else {
                  console.log("Please enter your project's description!");
                  return false;
                }
              }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                  return true;
                } else {
                  console.log('Please enter your GitHub link!');
                  return false;
                }
              }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
      });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    const pageREADME = generatePage(portfolioData);

     fs.writeFile('./readme.md', pageREADME, err => {
       if (err) throw new Error(err);

      console.log('Page created! Check out index.html in this directory to see it!');
    });
});

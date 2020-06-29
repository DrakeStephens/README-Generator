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
            validate: projectInput => {
                if (projectInput) {
                  return true;
                } else {
                  console.log('Please enter your projects name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a descritption of your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please enter a descritption of your project!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe how to install your project.',
            validate: installationInput => {
                if (installationInput) {
                  return true;
                } else {
                  console.log('Please enter a descritption of how to install your project!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how to use your project.',
            validate: installationInput => {
                if (installationInput) {
                  return true;
                } else {
                  console.log('Please enter a descritption of how to use your project!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Describe testing instructions.',
            validate: testingInput => {
                if (testingInput) {
                  return true;
                } else {
                  console.log('Please enter a descritption of how to test your project!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'enter your email so that people may reach you if they have further quesions.',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter a valid email!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'repo',
            message: 'Enter your GitHub username!.',
            validate: repoInput => {
                if (repoInput) {
                  return true;
                } else {
                  console.log('Please enter your GitHub username!');
                  return false;
                }
            }
        },
        {
            type: 'list',
            name: 'liscense',
            message: 'What type of liscense will you be using? (Check all that apply)',
            choices: ['(C)University of Utah', 'Liscense is pending.', ]
        }
    ]);
};
promptUser()
  .then(portfolioData => {
    const pageHTML = generatePage(portfolioData);

     fs.writeFile('./README.md', pageHTML, err => {
       if (err) throw new Error(err);

      console.log('Page created! Check out README.md in this directory to see it!');
    });
});


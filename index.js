const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const writeFile = require('./src/generate-site');

// array of the team data 
const teamData = [];

const promptRole = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Select the role you'd like to add?",
            choices: ['Manager', 'Engineer', 'Intern', 'none']
        }
    ])
};

const Arr = [
    {
        type: 'input',
        name: 'name',
        message: 'Whats the name of the employee you would like to add?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employees ID number?',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter your ID!');
                return false;
            }
        }    
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employees email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        } 
    }
];

const promptManager = () => {
    inquirer.prompt([
        ...Arr,
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the Manangers office number?',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter your office number!');
                    return false;
                }
            } 
        },
    ])
    .then( again => {
        askAgain();
    })
};

const promptEngineer = () => {
    inquirer.prompt([
        ...Arr,
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineers github account?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your github username!');
                    return false;
                }
            } 
        },
    ])
    .then( again => {
        askAgain();
    })
};

const promptIntern = () => {
    inquirer.prompt([
        ...Arr,
        {
            type: 'input',
            name: 'school',
            message: 'What school does the Intern attend?',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter your school!');
                    return false;
                }
            } 
        },
    ])
    .then( again => {
        askAgain();
    })
};

const askAgain = () => {
    inquirer.prompt([
    {
        type: 'confirm',
        name: 'addAnother',
        message: 'Would you like to add another employee?'
    },
    ])
    .then((question) => { 
    if (question.addAnother === true) {
        return promptRole()
    }
    return false;
    });
};
   
promptRole()
    .then(data => {
        switch(data.role) {
            case 'Manager':
            promptManager();
            break;
            case 'Engineer':
            promptEngineer();
            break;
            case 'Intern':
            promptIntern()
            break;
            default:
            askAgain();
        }
    });
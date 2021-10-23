const inquirer = require('inquirer');


const promptRole = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Select the role you'd like to add?",
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
};

const Arr = [
    {
        type: 'input',
        name: 'name',
        message: 'Whats the name of the employee you would like to add?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employees ID number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employees email address?'
    }
];

const promptManager = () => {
    return inquirer.prompt([
        ...Arr,
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the Manangers office number?'
        }
    ])
};

const promptEngineer = () => {
    return inquirer.prompt([
        ...Arr,
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineers github account?'
        }
    ])
};

const promptIntern = () => {
    return inquirer.prompt([
        ...Arr,
        {
            type: 'input',
            name: 'school',
            message: 'What school does the Intern attend?'
        }
    ])
};

promptRole()
    .then(promptManager)
    .then(promptEngineer)
    .then(promptIntern)
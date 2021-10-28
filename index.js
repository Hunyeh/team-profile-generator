const inquirer = require('inquirer');


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
    inquirer.prompt([
        ...Arr,
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the Manangers office number?'
        },
    ])
};

const promptEngineer = () => {
    inquirer.prompt([
        ...Arr,
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineers github account?'
        },
    ])
};

const promptIntern = () => {
    inquirer.prompt([
        ...Arr,
        {
            type: 'input',
            name: 'school',
            message: 'What school does the Intern attend?'
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
    .then((question) => { console.log('sdfsdf');
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
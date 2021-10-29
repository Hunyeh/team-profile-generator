const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const htmlBody = require('./src/page-template');
const managerCard = require('./src/manager-card');
const engineerCard = require('./src/engineer-card');
const internCard = require('./src/intern-card');

// array of the team data 
const teamData = [];

// array of questions asked for every employee
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

// question prompt for the manager
const promptManager = () => {
    const managerArr = [...Arr,
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
    }]
    return inquirer.prompt(managerArr)
};

// prompts user to choose what employee they would like to add after the manager
const promptRole = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Select the role you'd like to add?",
            choices: ['Engineer', 'Intern', 'none']
        }
    ])
    // switch stement depending on which role is chosen
    .then(data => {
        switch (data.role) {
            case 'Engineer':
                promptEngineer();
                break;
            case 'Intern':
                promptIntern()
                break;
            default:
                generateTeam();
        }
    });
};

// question prompt for the engineer 
const promptEngineer = () => {
    const engineerArr = [...Arr,
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
    }]
    inquirer.prompt(engineerArr)
    .then(engineerData => {
        let { name, id, email, github } = engineerData;
        const engineer = new Engineer (name, id, email, github);
        teamData.push(engineer);
        askAgain();
    });
};

//  question prompt for the intern
const promptIntern = () => {
    inquirer.prompt([...Arr,
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
        }
    ])
    // pushing intern data to the teamData array
    .then(internData => {
        let { name, id, email, school } = internData;
        const intern = new Intern(name, id, email, school);
        teamData.push(intern)
        askAgain();
    })
};

// function asking the user if they would like to add another employee
const askAgain = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'addAnother',
            message: 'Would you like to add another employee?'
        }
    ])
    .then((question) => {
        // if the answer is true "yes" then return to the promt role function
        if (question.addAnother === true) {
            promptRole();
        }
        // if not generate the team
        else {
            generateTeam();
        }
    });
};

// generates entire team to display
const generateTeam = () => {
    console.log(teamData);
    let card = "";
    // looping through the created team members
    for (let i = 0; i < teamData.length; i++) {
        if (teamData[i].getRole() === 'Manager') {
            card = card + managerCard(teamData[i]);
        }
        else if (teamData[i].getRole() === 'Engineer') {
            card = card + engineerCard(teamData[i]);
        }
        else {
            card = card + internCard(teamData[i]);
        }
    }
    // generates the HTML file
    fs.writeFileSync('./dist/index.html', htmlBody(card));
};

// call to start the application
promptManager()
    .then(managerData => {
        let { name, id, email, officeNumber } = managerData;
        const manager = new Manager (name, id, email, officeNumber);
        teamData.push(manager);
        askAgain();
    })
    .catch(err => {
    console.log(err);
});
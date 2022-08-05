const inquirer = require('inquirer');
//const fs = require('fs');

// array of questions for user

const promptUser = () => { 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your manager\'s name?'
        },
        {
            type: 'input',
            name: 'employeeIdNumber',
            message: 'What is your employeeId number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your employee\'s email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your employee\'s office number?'
        },  
        {
            type: 'list',
            name: 'role',
            message: 'What is your employee\'s role? (-use arrow keys-)',
            choices: ['Engineer', 'Intern', '-Finished?-']
        
        },
    ]);
} 

            const init = () => {
                promptUser()
                .then(answers => FileSystem.writefile('index.html'(answers)))
                .then(() => console.log('Success'))
                .catch(err => console.log(err));
            };
            init();
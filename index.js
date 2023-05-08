// import inquirer 
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// Class containing all questions
class Prompt {
    constructor() {
        this.teamArray = [];
    }

    /**
     * @returns the array of all Employee objects
     */

    getTeamArray() {
        return this.teamArray;
    }

    // questions() is a method. It is used to display a series of prompts to the user in order to gather information about the team members. It uses the inquirer.prompt() method to display the prompts to the user and waits for the user to enter a response.
    questions() {
        inquirer.prompt(
            {
                type: 'list',
                name: 'employeeEntry',
                message: "What type of employee do you want to add?",
                choices: ['Manager', 'Engineer', 'Intern', 'Team Completed']
            })
            //here we are assessing the employee type selected by the user
            .then(({ employeeType }) => {
                if (employeeType === 'Manager') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "What is the name of the manager?",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the manager\'s name!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: "Enter the manager\'s employee id",
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("Please enter a correct answer, the employee id should be a number!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "Enter the email that is used by the manager",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct manager\'s email!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'officeNumber',
                            message: "Enter the manager\'s office number",
                            //so considering that this type is set to number, the validation test is checking that not only was something entered but that it is also a number, excluding any special characters and or letters
                            validate: officeNumber => {
                                if (officeNumber) {
                                    return true;
                                } else {
                                    console.log("Please enter only numbers, blank entries are not allowed");
                                    return false;
                                }
                            }
                        },
                    ])

                        // Pushes Manager data into teamArray
                        .then((outputData) => {
                            const newManager = new Manager(outputData.name, outputData.id, outputData.email, outputData.officeNumber)
                            //will push the manager data into the array we defined at the start of the code
                            this.teamArray.push(newManager);

                            // Sends user back to then employee add menu
                            this.questions();
                        });

                } else if (employeeType === 'Engineer') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Please enter the engineer\'s name",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the engineer's name!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: "Please enter the engineer\'s employee id",
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("Please enter a correct answer, the employee id should be a number!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "Please enter the engineer\'s email",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct engineer's email!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'github',
                            message: "Please enter the engineer\'s github username",
                            validate: githubInput => {
                                if (githubInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct engineer's github username!");
                                    return false;
                                }
                            }
                        }

                        // Pushes Engineer data into teamArray
                    ]).then(outputData => {
                        const newEngineer = new Engineer(outputData.name, outputData.id, outputData.email, outputData.github);
                        this.teamArray.push(newEngineer);
                        // Sends user back to menu
                        this.questions();
                    });

                } else if (employeeType === 'Intern') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Please enter the intern\'s name",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the intern\'s name!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: "Please enter the intern\'s employee id",
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("Please enter a correct answer, the employee id should be a number!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "Please enter the intern\'s email",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct intern's email!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: "Please enter the intern\'s school name",
                            validate: schoolInput => {
                                if (schoolInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct intern school\'s name!");
                                    return false;
                                }
                            }
                        }

                        // Pushes Intern data into teamArray
                    ]).then(outputData => {
                        const newIntern = new Intern(outputData.name, outputData.id, outputData.email, outputData.school);
                        this.teamArray.push(newIntern);
                        // Sends user back to menu
                        this.questions();
                    });

                } else if (employeeType === 'Team Completed') {
                    //function that writes the html file in the dist folder
                    const pagehtml = generateHTML(this.getTeamArray());
                    fs.writeFile('./dist/index.html', pagehtml, err => {
                        if (err) throw new Error(err);

                        console.log('Head towards the dist folder to find the generated html file');
                    });
                }
            });

    }
};

// Starts prompts for us in CLI
const prompt = new Prompt();
prompt.questions();

module.exports = Prompt;

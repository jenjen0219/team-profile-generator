const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;


    }
    getRoll() {
        return 'Intern';
    }
    getGithub() {
        return this.github;
    }

};
module.exports = Intern;
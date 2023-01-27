const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;


    }
    getRoll() {
        return 'Manager';
    }
    getGithub() {
        return this.github;
    }

};
module.exports = Manager;
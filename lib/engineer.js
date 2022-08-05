const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, github,) {
        super(name, id, github,);
        this.github = 'github';
    }
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer; // export the class so that it can be used in other files
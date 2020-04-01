// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, ID, email, githubUsername) {
    super(name, ID, email);
    this.githubUsername = githubUsername;
  }

  getGithub() {
    return this.githubUsername;
  }

  getRole() {
    this.role = "Engineer";
  }
}

module.exports = Engineer;

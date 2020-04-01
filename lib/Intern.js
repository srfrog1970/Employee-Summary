// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, ID, email, school) {
    super(name, ID, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    this.role = "Intern";
  }
}

module.exports = Intern;

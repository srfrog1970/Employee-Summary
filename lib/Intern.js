// Take in the Employee Class.
Employee = require("./Employee");

// Extend the Employee class for Interns, Take in their School Name
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    // Override role
    //this.role = "Intern";
  }

  // Return School
  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;

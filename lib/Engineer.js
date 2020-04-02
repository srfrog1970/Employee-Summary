// Take in the Employee Class.
Employee = require("./Employee");

// Extend the Employee class for Engineeers, Take in their github ID
class Engineer extends Employee {
  constructor(name, id, email, githubUsername) {
    super(name, id, email);
    this.github = githubUsername;

    // Override the role with "engineer"  Tutor
    //this.role = "Engineer";
  }

  // Return the Github ID
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;

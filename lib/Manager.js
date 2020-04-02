// Extend the Employee class for Engineeers, Take in their github ID
Employee = require("./Employee");

// Extend the Employee class for Managers, Take in their Office number
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    // Override role
    this.role = "Manager";
  }

  // Get the office number
  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;

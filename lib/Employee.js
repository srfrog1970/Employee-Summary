// TODO: Write code to define and export the Employee class
var employeeId = 0;

class Employee {
  constructor(name, ID, email) {
    this.name = name;
    this.id = ID;
    this.email = email;
    this.role = "";
    employeeId++;
    this.employeeId = employeeId;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    this.role = "Employee";
  }
}

module.exports = Employee;

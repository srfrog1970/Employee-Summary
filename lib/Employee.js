//Class Employee
class Employee {
  //Set up constructor
  constructor(name, id, email) {
    this.name = name;
    this.email = email;
    // this.role = "Employee";
    this.id = id;
  }
  // Gets the name, ID, email, and role
  getName() {
    return this.name;
  }
  getItem() {
    return "Item";
  }
  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;

class Employee {
  // Save a reference for `this` in `this` as `this` will change inside of inquirer
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
  }

  getName() {
      return this.name;
  }

  getRole() {
      return "Employee";
  }

  getEmail() {
      return this.email;
  }

  getId() {
      return this.id;
  }
}




module.exports = Employee;
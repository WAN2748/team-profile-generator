class employee {
  // Save a reference for `this` in `this` as `this` will change inside of inquirer
  constructor(name, position, contact, id) {
    this.name = name;
    this.position = position;
    this.contact = contact;
    this.id = id;
  }

  getName() {
      return this.name;
  }

  getPosition() {
      return this.position;
  }

  getContact() {
      return this.contact;
  }

  getId() {
      return this.id;
  }
}




module.exports = employee;
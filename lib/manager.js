class manager {
    constructor(name, position, contact) {
        this.name = name;
        this.position = position;
        this.contact = contact;
    }
}

const Manager = [
    new manager("Marie", "Manager", "marie@awesome.com")
];

module.exports = {
    manager,
    Manager
};
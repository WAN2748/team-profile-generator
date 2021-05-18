class intern {
    constructor(name, position, contact) {
        this.name = name;
        this.position = position;
        this.contact = contact;
    }
}

const Intern = [
    new intern("Alex", "Intern", "alex@awesome.com")
];

module.exports = {
    intern,
    Intern
};
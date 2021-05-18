class engineer {
    constructor(name, position, contact){
        this.name = name;
        this.position = position;
        this.contact = contact;
    }
}

const Engineer = [
    new engineer("Richard", "Engineer", "richard@awesome.com")
];

module.exports = {
    engineer,
    Engineer
}
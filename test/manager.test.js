const Manager = require('../lib/Manager');

describe("Manager class", () => {
    it("returns name", () => {
        const e = new Manager("Marie", "mam@hello.com", 2)
        expect(e.getName()).toBe("Marie")
    });

    it("returns email", () => {
        const e = new Manager("Marie", "mam@hello.com", 2, "555-2368")
        expect(e.getEmail()).toBe("mam@hello.com")
    });

    it("returns Id", () => {
        const e = new Manager("Marie", "mam@hello.com", 2, "555-2368")
        expect(e.getId()).toBe(2)
    });

    

    it("returns role", () => {
        const e = new Manager("Marie", "mam@hello.com", 2, "555-2368")
        expect(e.getRole()).toBe("Manager")
    });

    it("returns Office Number", () => {
        const e = new Manager("Marie", "mam@hello.com", 2, "555-2368")
        expect(e.getOfficeNumber()).toBe("555-2368")
    });


})
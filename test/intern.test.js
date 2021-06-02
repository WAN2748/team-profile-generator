const Intern = require('../lib/intern');

describe("Intern class", () => {
    it("returns name", () => {
        const e = new Intern("Alex", "Alex@hello.com", 3)
        expect(e.getName()).toBe("Alex")
    });

    it("returns email", () => {
        const e = new Intern("Alex", "Alex@hello.com", 3, "Rutgers")
        expect(e.getEmail()).toBe("Alex@hello.com")
    });

    it("returns Id", () => {
        const e = new Intern("Alex", "Alex@hello.com", 3, "Rutgers")
        expect(e.getId()).toBe(3)
    });

    

    it("returns role", () => {
        const e = new Intern("Alex", "Alex@hello.com", 3, "Rutgers")
        expect(e.getRole()).toBe("Intern")
    });

    it("returns School", () => {
        const e = new Intern("Alex", "Alex@hello.com", 3, "Rutgers")
        expect(e.getSchool()).toBe("Rutgers")
    });


})
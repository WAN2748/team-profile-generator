const Employee = require("../lib/Employee");

describe("Employee class", () => {
    it("returns name", () => {
        const e = new Employee("Winston", "hi@hello.com", 5 )
        //e.getName()
        //expect name to be Winston
        expect(e.getName()).toBe("Winston")
    });

    it("returns email", () => {
        const e = new Employee("Winston","hi@hello.com", 5 )
        //e.getName()
        //expect name to be Winston
        expect(e.getEmail()).toBe("hi@hello.com")
    });

    it("returns id", () => {
        const e = new Employee("Winston","hi@hello.com", 5 )
        //e.getName()
        //expect name to be Winston
        expect(e.getId()).toBe(5)
    });

    it("returns role", () => {
        const e = new Employee("Winston","hi@hello.com", 5 )
        //e.getName()
        //expect name to be Winston
        expect(e.getRole()).toBe("Employee")
    });

});

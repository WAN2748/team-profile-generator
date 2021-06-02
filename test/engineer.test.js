const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
    it("returns name", () => {
        const e = new Engineer("Richard", "rocky@hello.com", 1)
        expect(e.getName()).toBe("Richard")
    });

    it("returns email", () => {
        const e = new Engineer("Richard", "rocky@hello.com", 1, "github.com/rocky1")
        expect(e.getEmail()).toBe("rocky@hello.com")
    });

    it("returns Id", () => {
        const e = new Engineer("Richard", "rocky@hello.com", 1, "github.com/rocky1")
        expect(e.getId()).toBe(1)
    });

    

    it("returns role", () => {
        const e = new Engineer("Richard", "rocky@hello.com", 1, "github.com/rocky1")
        expect(e.getRole()).toBe("Engineer")
    });

    it("returns GitHub", () => {
        const e = new Engineer("Richard", "rocky@hello.com", 1, "github.com/rocky1")
        expect(e.getGithub()).toBe("github.com/rocky1")
    });


})
const Intern = require("../lib/Intern.js");

test("testing the school property of the constructor", () => {
    const testV = "Ohio State University";
    const employee = new Intern("Kirk", 3, "kirkh43064@yahoo.com", testV);
    expect(employee.school).toBe(testValue);
});

test("test the getRole function", () => {
    const testV = "Intern";
    const employee = new Intern("Kirk", 3, "kirkh43064@yahoo.com", testV);
    expect(employee.getRole()).toBe(testValue);
});

test("test the getSchool function", () => {
    const testV = "Ohio State University";
    const employee = new Intern("Kirk", 3, "kirkh43064@yahoo.com", testV);
    expect(employee.getSchool()).toBe("Ohio State University");
});
  
const Engineer = require('../lib/Engineer.js');

test("setting up github via constructor", () => {
    const testV = "kirkh43064";
    const employee = new Engineer("Kirk", 3, "kirkh43064@yahoo.com", testV);
    expect(employee.github).toBe("kirkh43064");
});

test("testing the getRole function", () => {
    const testV = "Engineer";
    const employee = new Engineer("Kirk", 3, "test@cheese.com", testV);
    expect(employee.getRole()).toBe("Engineer");
});

test("Testing the getGitHub function", () => {
    const testV = "kirkh43064";
    const employee = new Engineer("Kirk", 3, "test@cheese.com", testV);
    expect(employee.getGitHub()).toBe("kirkh43064");
});
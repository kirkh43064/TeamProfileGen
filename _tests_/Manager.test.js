const Manager = require('../lib/Manager.js');


test("testing officeNumer", () => {
    const testV = "867-5309";
    const employee = new Manager("Kirk", 1, "kirkh43064@yahoo.com", testV);
    expect(employee.officeNumber).toBe("867-5309");
})

test("testing the getRole function", () => {
    const testV = "Manager";
    const employee = new Manager("Kirk", 3, "kirkh43064@yahoo.com", testV);
    expect(employee.getRole()).toBe("Manager");
})
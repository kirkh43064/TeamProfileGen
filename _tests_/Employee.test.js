const Employee = require('../lib/Employee.js');

test('test to make sure it creates employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test('Set Employee Name', () => {
    const name = "Kirk"
    const employee = new Employee(name);
    expect(employee.name).toBe("Kirk");
});

test('Set ID', () => {
    const testId = 3;
    const employee = new Employee("Kirk", testId);
    expect(employee.id).toBe(3);
});

test('Set Email', () => {
    const testEmail = "kirkh43064@yahoo.com"
    const employee = new Employee("Grant", 1, testEmail);
    expect(employee.email).toBe("kirkh43064@yahoo.com");
});

test('get name from getName', () => {
    const testName = "Kirk"
    const employee = new Employee(testName);
    expect(employee.getName()).toBe("Kirk");
});

test('get ID from getId', () => {
    const testId = 3
    const employee = new Employee("Kirk", testId);
    expect(employee.getId()).toBe(3);
});

test('get email from getEmail', () => {
    const testEmail = "kirkh43064@yahoo.com"
    const employee = new Employee("Grant", 1, testEmail);
    expect(employee.getEmail()).toBe("kirkh43064@yahoo.com");
});

test('getRole function', () => {
    const testRole = "Employee"
    const employee = new Employee("Grant", 3, "kirkh43064@yahoo.com");
    expect(employee.getRole()).toBe("Employee");
});
const Employee = require('../lib/Employee');

test('test properties of Employee', () => {
    const employee = new Employee('Billy', 123, 'billy@mail.com');
    expect(employee.name).toBe('Billy');
    expect(employee.id).toBe(123);
    expect(employee.email).toBe('billy@mail.com');
});

test('test the getMethods of Employees', () => {
    const employee = new Employee('Bobby', 234, 'bobby@mail.com');
    expect(employee.getName()).toBe('Bobby');
    expect(employee.getId()).toBe(234);
    expect(employee.getEmail()).toBe('bobby@mail.com');
    expect(employee.getRole()).toBe('Employee');
});
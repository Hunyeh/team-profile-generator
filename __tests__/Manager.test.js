const Manager = require('../lib/Manager');

test('test properties of Manager', () => {
    const manager = new Manager('Augie', 456, 'augie@mail.com', 1234);
    expect(manager.name).toBe('Augie');
    expect(manager.id).toBe(456);
    expect(manager.email).toBe('augie@mail.com');
    expect(manager.officeNumber).toBe(1234);
});

test('test the getMethods of Manager', () => {
    const manager = new Manager('Augie', 456, 'augie@mail.com', 1234);
    expect(manager.getName()).toBe('Augie');
    expect(manager.getId()).toBe(456);
    expect(manager.getEmail()).toBe('augie@mail.com');
    expect(manager.getRole()).toBe('Manager');
    expect(manager.getOfficeNumber()).toBe(1234);
});
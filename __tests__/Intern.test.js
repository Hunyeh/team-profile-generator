const Intern = require('../lib/Intern');

test('test properties of Intern', () => {
    const intern = new Intern('Derek', 789, 'derek@mail.com', 'Rutgers');
    expect(intern.name).toBe('Derek');
    expect(intern.id).toBe(789);
    expect(intern.email).toBe('derek@mail.com');
    expect(intern.school).toBe('Rutgers')
});

test('test the getMethods of Intern', () => {
    const intern = new Intern('Derek', 789, 'derek@mail.com', 'Rutgers');
    expect(intern.getName()).toBe('Derek');
    expect(intern.getId()).toBe(789);
    expect(intern.getEmail()).toBe('derek@mail.com');
    expect(intern.getRole()).toBe('Intern');
    expect(intern.getSchool()).toBe('Rutgers')
});
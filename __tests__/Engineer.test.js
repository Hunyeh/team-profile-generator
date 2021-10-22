const Engineer = require('../lib/Engineer');

test('test properties of Engineer', () => {
    const engineer = new Engineer('Fran', 345, 'fran@mail.com', 'franny345');
    expect(engineer.name).toBe('Fran');
    expect(engineer.id).toBe(345);
    expect(engineer.email).toBe('fran@mail.com');
    expect(engineer.github).toBe('franny345')
});

test('test the getMethods of Engineer', () => {
    const engineer = new Engineer('Fran', 345, 'fran@mail.com', 'franny345');
    expect(engineer.getName()).toBe('Fran');
    expect(engineer.getId()).toBe(345);
    expect(engineer.getEmail()).toBe('fran@mail.com');
    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getGithub()).toBe('franny345')
});
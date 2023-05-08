const Intern = require('../lib/Intern');
const { test } = require('@jest/globals');

test('creating the intern object', () => {
    const intern = new Intern('Justin');
    expect(typeof (intern)).toBe("object");
});

test("lets grab the interns school", () => {
    const intern = new Intern('Intern', '1235', 'jengutierrez.1210@gmail.com', 'WSU');
    expect(intern.getSchool()).toBe('WSU');
});

test("now lets make sure the getRole method is indeed returning our wonderful intern", () => {
    const intern = new Intern('Intern');
    expect(intern.getRole()).toBe('Intern');
});
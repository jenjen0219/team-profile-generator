const Engineer = require('../lib/Engineer');
const { test } = require('@jest/globals');

test('creating the engineering object', () => {
    const engineer = new Engineer('Justin');
    expect(typeof (engineer)).toBe("object");
});

test("lets grab the github username", () => {
    const engineer = new Engineer('Manager', '1234', 'jengutierrez.1210@gmail.com', 'jenjen1029');
    expect(engineer.getGithub()).toBe('jenjen1029');
});

test("now lets make sure the getRole method is indeed returning our wonderful engineer", () => {
    const engineer = new Engineer('Engineer');
    expect(engineer.getRole()).toBe('Engineer');
});
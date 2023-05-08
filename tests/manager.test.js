const Manager = require('../lib/Manager');
const { test } = require('@jest/globals');

test('creating the manager object', () => {
    const manager = new Manager('Justin');
    expect(typeof (manager)).toBe("object");
});

test("lets grab the managers office number", () => {
    const manager = new Manager('manager', '1235', 'jengutierrez.1210@gmail.com', '15');
    expect(manager.getOfficeNumber()).toBe('15');
});

test("now lets make sure the getRole method is indeed returning our wonderful manager", () => {
    const manager = new Manager('Manager');
    expect(manager.getRole()).toBe('Manager');
});
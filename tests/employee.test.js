// const { default: expect } = require("expect");
// const { describe } = require("yargs");
const { expect } = require('@jest/globals');
const Employee = require("../lib/Employee");


describe('Employee', () => {

    test('create an instance of an employee object and see if it is indeed an object', () => {
        const employee = new Employee();
        expect(typeof (employee)).toBe("object");
    });

    test("we need to make sure that the employees name is indeed being retrieved", () => {
        const employee = new Employee('Justin');
        expect(employee.getName()).toBe('Justin');
    });

    test("we need to make sure that the employees id is indeed being retrieved", () => {
        const employee = new Employee('Justin', '1234');
        expect(employee.getId()).toBe('1234');
    });

    test("we need to make sure that the employees email is indeed being retrieved", () => {
        const employee = new Employee('Justin', '1234', 'jengutierrez.1210@gmail.com');
        expect(employee.getEmail()).toBe('jengutierrez.1210@gmail.com');
    });

    test("we need to make sure that the employees role is indeed being retrieved", () => {
        const employee = new Employee('Employee');
        expect(employee.getRole()).toBe('Employee');
    });

});
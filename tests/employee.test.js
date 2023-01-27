const { default: expect } = require("expect");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");

// describe('Employee')

test("Can instantiate Employee instance", () => {
    const emp = new Employee();
    expect(typeof (emp)).toBe("object");
});

test("getRole() should return \"Employee\"", () => {
    const expectedValue = "Employee";
    const emp = new Employee("my-name", 1, "test@test.com");
    expect(emp.getRole()).toBe(expectedValue);
});

test("getName() should return \"name of employee\"", () => {
    const expectedValue = "jennifer";
    const emp = new Employee("jennifer", 1, "test@test.com");
    expect(emp.getName()).toBe(expectedValue);
});

test("getId() should return \"Id of employee\"", () => {
    const expectedValue = 25;
    const emp = new Employee("jennifer", 25, "test@test.com");
    expect(emp.getId()).toBe(expectedValue);
});

test("getEmail() should return \"Id of employee\"", () => {
    const expectedValue = 25;
    const emp = new Employee("jennifer", 25, "test@test.com");
    expect(emp.getId()).toBe(expectedValue);
});

describe('Employee', ()=>{
    const name = 'Justin';
    const id = 345;
    const email = 'puppyface1029w@yahoo.com';

    const employee = new Employee(name, id, email); 
    
    it('it should return the name of our lil employee', () =>{
        expect(employee.getName().toBe('Justin'));
    });
    it('it should return the name of our lil employee', () =>{
        expect(employee.getName().toBe('Justin'));
    });



})
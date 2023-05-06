const { default: expect } = require("expect");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");


describe('Employee', ()=>{
    const name = 'Justin';
    const id = 345;
    const email = 'puppyface1029w@yahoo.com';

    const employee = new Employee(name, id, email); 
    
    it('it should return the name of our employee', () =>{
        expect(employee.getName().toBe('Justin'));
    });
    it('it should return the role of our employee', () =>{
        expect(employee.getRole().toBe('Manager'));
    });
    it('it should return the id of our employee', () =>{
        expect(employee.getId().toBe('345'));
    });
    it('it should return the role of our employee', () =>{
        expect(employee.getEmail().toBe('puppyface1029w@yahoo.com'));
    });



})
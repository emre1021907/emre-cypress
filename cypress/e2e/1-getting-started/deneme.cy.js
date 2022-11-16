/// <reference types="cypress" />



// const tests = require("../../fixtures/example.json")

// import { Login } from "../../deneme/login.cy"
// const login = new Login()

//const login = new Login

// describe('example to-do app', () => {


// tests.forEach(test => {
//     it('emre', {keystrokeDelay: 1000}, () => {
//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//         login.navigate()
        
//         //cy.visit()
//     })

// })
    
// })


describe('Test an alert and the text displaying', function() {
    it('Verify alert and its text content', function(){
        cy.visit('http://www.seleniumeasy.com/test/javascript-alert-box-demo.html')    
    
        const stub = cy.stub()  
        cy.on ('window:alert', stub)
        cy.get('button').contains('Click me!').click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('I am an alert box!')      
        })  
    
        })
    
    })
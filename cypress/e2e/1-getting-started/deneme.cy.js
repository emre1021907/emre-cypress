/// <reference types="cypress" />

import { Login } from "./pageObjects/login.cy"


const login = new Login

describe('example to-do app', () => {

    it('deneme',() => {
        cy.visit("https://www.google.com/")
        login.clickArama()
        cy.get('.gLFyf').focus().blur()
        login.clickemrearama()
        login.goToViki()
        login.clickZeytinburnu()

    })
})



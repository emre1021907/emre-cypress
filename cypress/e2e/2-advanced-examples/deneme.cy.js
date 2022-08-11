/// <reference types="cypress" />

import LoginPage from "../PageObjects/LoginPage"


context('Files', () => {
    
    it('cy.fixture() or require - load a fixture', function () {
      // we are inside the "function () { ... }"
      // callback and can use test context object "this"
      // "this.example" was loaded in "beforeEach" function callback
      const lp = new LoginPage()
      lp.visit()
      lp.fillEmail("emre")
      cy.get("input[name='q']").blur()
      lp.clickButton()
    })
    })
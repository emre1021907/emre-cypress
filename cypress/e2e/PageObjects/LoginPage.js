/// <reference types="cypress" />

class LoginPage
{


visit(){
    cy.visit("https://www.google.com/")
}

fillEmail(value){

    cy.get("input[name='q']").type(value)
}

clickButton(){
    cy.get('.FPdoLc > center > .gNO89b').click()
}


}

export default LoginPage
/// <reference types="cypress" />

const { eq } = require("lodash")


describe('example of orangehr', () => {

    it('mousehoverdeneme', () => {
        cy.visit("https://www.asus.com/tr/Motherboards-Components/Motherboards/All-series/PRIME-B450M-K/HelpDesk_BIOS/")
        cy.viewport(1920, 1080)
        cy.get('[style="display: flex;"] > .ProductSupportDriverBIOS__boxContent__d7BZK > .ProductSupportDriverBIOS__contentLeft__3F4tG > .ProductSupportDriverBIOS__version__3hP9J')
        .then(($el) =>{
            const emre = $el.text()
            cy.wrap(emre).should('include', "Sürüm 3802")
        } )



    })
})
export class Login {

    clickArama() {

        cy.get('.gLFyf').type("emre")
        return this

    }

    clickemrearama() {

        cy.get('.FPdoLc > center > .gNO89b').click()
        return this
    }

    goToViki() {
        cy.get('.ruhjFe').click()
        return this
    }

    clickZeytinburnu(){
        cy.get(':nth-child(15) > [style="white-space: nowrap; vertical-align: baseline"] > a').click({force:true})
    }


}
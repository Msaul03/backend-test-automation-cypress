describe('Probando statuses', () => {

    it('Debe de validar el status code exitoso', () => {
        cy.request('http://localhost:3000/employees')
            .its('status')
            .should('eq', 200)
    })

    it('Debe de validar el status code fallido', () => {
        //Mostrar que esto fallara porque no existe el endpoint pero fallara antes de hacer la asercion
        // cy.request('http://localhost:3000/employees/4')
        //     .its('status')
        //     .should('eq', 404)

        //Debemos de pasar la propiedad failOnStatusCode
        cy.request({url: 'http://localhost:3000/employees/4', failOnStatusCode: false})
            .its('status')
            .should('eq', 404)

    })


})
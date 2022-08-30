describe('Probando headers', () => {

    it('Debe de validar el header y el content type', () => {
        cy.request('http://localhost:3000/employees')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json')
            
    })

})
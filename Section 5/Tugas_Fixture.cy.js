/// <reference types="cypress" />

describe('Fixtures Data', function() {

    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/', { timeout: 10000 })
        cy.url().should('include','saucedemo.com')

        // Use Fixtures Data in Login
        cy.fixture("user").then(user => {
           const username = user.username
           const password = user.password
        // Input Username
            cy.get('#user-name').type(username)
        // Input Password
            cy.get('#password').type(password)
            cy.contains('LOGIN').click()
        });
    });
});
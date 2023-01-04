/// <reference types="cypress" />

describe('Fixtures Data', () => {

    it('Visit the website', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.request('https://www.saucedemo.com/')
        cy.visit('https://www.saucedemo.com/')
        cy.reload()
        cy.wait(500)
        cy.url().should('include','saucedemo.com')

        // Use Fixtures Data in Login
        cy.fixture("user").then(user => {
           const username = user.username
           const password = user.password
        // Input Username
            cy.get('#user-name').type(username)
        // Input Password
            cy.get('#password').type(password)
            cy.get('#login-button').click()
        // Logout
            cy.get('#react-burger-menu-btn').click()
            cy.contains('Logout').click()
        });
    });
});

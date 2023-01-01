/// <reference types="cypress" />

describe('Working with inputs', () => {

    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')

        // Clear and Input Username
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')

        // Clear and Input Password
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')

        // Check keep me signed in
        cy.get('#user_remember_me').click()
            
    });
});
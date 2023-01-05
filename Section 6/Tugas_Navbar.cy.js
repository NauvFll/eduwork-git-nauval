/// <reference types="cypress" />

describe('Navigation Bar', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')        
    });
        
    it('Should display Navbar Content', () => {
        // Navbar Online Banking
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include','online-banking.html')
        cy.get('h1').should('be.visible')

        // Navbar Feedback
        cy.get('#feedback').click()
        cy.url().should('include','feedback.html')
        cy.get('h3').should('be.visible').and('contain.text', 'Feedback')

        // Navbar Zero Bank
        cy.contains('Zero Bank').click()
        cy.url('include', 'index.html')

        // Login
        cy.get('#signin_button').click()

        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')

        cy.get('#user_password').clear()
        cy.get('#user_password').type('password')
        cy.get('.btn-primary').click()

        // Checking Account Activity
        cy.get('#account_activity_link').click()
        cy.url('include', 'activity.html')
        cy.get('h3').and('contain.text', 'Find Transactions').click()

    });
});


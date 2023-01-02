// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Login', (username,password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type('username')

        // Clear and Input Password
    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type('password')

        // Check keep me signed in
    cy.get('#user_remember_me').click()

        // Sign in
    cy.contains('Sign in').click()
})

Cypress.Commands.add('newPay', () => {
    cy.get('#pay_bills_tab').should('contain.text', 'Pay Bills').click()
    cy.get('.ui-corner-top').contains('Add New Payee').click()
    cy.get('#np_new_payee_name').type('Nauval')
    cy.get('#np_new_payee_address').type('Depok')
    cy.get('#np_new_payee_account').type('Nauval')
    cy.get('#np_new_payee_details').type('Entertaiment')
    cy.get('#add_new_payee').click()
    
    cy.get('#alert_content').should('be.visible')
})

Cypress.Commands.add('Pay', () => {
    // // Choose Payee
    cy.get('#sp_payee').select("Bank of America")

    // Choose Account
    cy.get('#sp_account').select("Credit Card")

    // Add Amount
    cy.get('#sp_amount').clear()
    cy.get('#sp_amount').type('150')

    // Add Date 
    cy.get('#sp_date').clear()
    cy.get('#sp_date').click()
    _.times(10, () => { cy.get('.ui-datepicker-next').click() })
    cy.contains('7').click()

    // Add Description
    cy.get('#sp_description').clear()
    cy.get('#sp_description').type('Alhamdulilah aku bisa')

    cy.contains('Pay').click()
})

Cypress.Commands.add('Logout', () => {
    cy.contains('username').click()
    cy.get('#logout_link').click()
})

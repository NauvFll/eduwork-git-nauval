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
    cy.get('#user_login').type('standard_user')

        // Clear and Input Password
    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type('secret_sauce')
        // Sign in
    cy.get('#login-button').click()
})

Cypress.Commands.add('sortAZ', () => {
    cy.get('.product_sort_container').select('az', 'Name (A to Z)')
})

Cypress.Commands.add('sortZA', () => {
    cy.get('.product_sort_container').select('za', 'Name (Z to A)')
})

Cypress.Commands.add('HighLow', () => {
    cy.get('.product_sort_container').select('hilo', 'Price (high to low)')
})

Cypress.Commands.add('LowHigh', () => {
    cy.get('.product_sort_container').select('lohi', 'Price (low to high)')
})

Cypress.Commands.add('AddCart', () => {
    cy.get('.inventory_item_name').should('be.visible')
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('.inventory_item_name').should('be.visible')
    cy.get('#add-to-cart-sauce-labs-bike-light').click()

    cy.get('.shopping_cart_link').click()
})

Cypress.Commands.add('RemoveCart', () => {
    cy.get('.cart_button').should('be.visible')
    cy.get('#remove-sauce-labs-bike-light').click()
    cy.get('.cart_button').should('be.visible')
    cy.get('#remove-sauce-labs-backpack').click()
    
    cy.get('#continue-shopping').click()
})

Cypress.Commands.add('CheckOut', () => {
    cy.get('.checkout_button').should('be.visible')
    cy.get('#checkout').click()
})

Cypress.Commands.add('InputInfo', () => {
    cy.get('#first-name').clear()
    cy.get('#first-name').type('Jiyan Falih')
    cy.get('#last-name').clear()
    cy.get('#last-name').type('Nauval')
    cy.get('#postal-code').clear()
    cy.get('#postal-code').type('16515')

    cy.get('#continue').click()
    cy.get('#finish').click()
    cy.get('#back-to-products').click()
})

Cypress.Commands.add('Logout', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.contains('Logout').click()
})

Cypress.Commands.add('loginViaAPI', (Authorization) => {
    cy.request('GET', `${Cypress.env('apiUrl')}/basic_auth`, {
        Authorization
    }).then((response) => {
      expect(response.status).equal(200)
      expect(response.body).contains('Basic Auth')
      expect(response.body).contains('Congratulations! You must have the proper credentials.')
    })
 })
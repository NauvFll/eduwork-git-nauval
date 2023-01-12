/// <reference types="cypress" />

describe('E2E', () => {

    it('Visit the website', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.request('https://www.saucedemo.com/')
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include','saucedemo.com')

        // Use Fixtures Data in Login
        cy.fixture("user").then(user => {
           const username = user.username
           const password = user.password
           const Firstname = user.Firstname
           const Lastname = user.Lastname
           const ZipCode = user.ZipCode

        // Input Username
            cy.get('#user-name').type(username)

        // Input Password
            cy.get('#password').type(password)
            cy.get('#login-button').click()
        
        // Sort A-Z
            cy.sortAZ()
        
        // Sort Z-A
            cy.sortZA()

        // Sort Price High-Low
            cy.HighLow()

        // Sort Price Low-High
            cy.LowHigh()
            
        //  Add To Cart
            cy.AddCart()
        
        // Remove Cart
            cy.RemoveCart()
        
        // Add to Cart
            cy.AddCart()
        
        // CheckOut
            cy.CheckOut()
        
        // Input Information
            cy.InputInfo()

        // Logout
            cy.Logout()

        });
    });
});

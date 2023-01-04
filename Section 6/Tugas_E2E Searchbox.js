/// <reference types="cypress" />

describe('Search Box Test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should type into searchbox and submit',() => {
        //TO DO
        cy.get('#searchTerm').type('Online {enter}')
    it('Should show search result page', () => {
        //TO DO
        cy.get('h2').contains('Search Result:')
        });
    });
});
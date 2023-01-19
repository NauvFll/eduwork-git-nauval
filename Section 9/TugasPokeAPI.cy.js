describe('Basic Auth', () => {
// it.only('Validate Header', () => {
//     cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
//     cy.get('@pokemon').its('headers').its('content-type')
//         .should('include', 'application/json; charset=utf-8')
// });
    it('successfully update user', () => {
        
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            // cy.log(response.status)
            expect(response.status).equal(200)
            // cy.log(response.body)
            expect(response.body.abilities[0].ability.name).to.eql('limber')
            expect(response.body.abilities[0].ability.url).to.eql('https://pokeapi.co/api/v2/ability/7/')
        })
    })
})

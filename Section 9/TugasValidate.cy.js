describe('Validate Content', () => {

    it.only('Successfully Validate Limber', () => {
        
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            expect(response.status).equal(200)
            expect(response.body.abilities[0].ability.name).to.eql('limber')
            expect(response.body.abilities[0].ability.url).to.eql('https://pokeapi.co/api/v2/ability/7/')
        })
    })
})

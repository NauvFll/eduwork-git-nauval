describe('Create New User', () => {
    
    it('successfully create new user', () => {
        var user = {
            "name": "Nauval",
            "job": "QA Engineer"
        }
    
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect({ name: 'Nauval' }).to.eql({ name: 'Nauval' })
            expect({ job: 'QA Engineer' }).to.eql({ job: 'QA Engineer' })
        })
    })
})
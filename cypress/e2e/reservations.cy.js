describe('Reservations', () => {
    beforeEach(() => {
        cy.fixture('reservations.json').then((reservations) => {
            cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
                statusCode: 200,
                body: reservations
            })
        })
        cy.visit('http://localhost:3000')
    })
    it('should display the title and existing reservations on page load', () => {
        cy.get('.app-title').should('contain', 'Turing Cafe Reservations')
        cy.get('.reservation-card').should('have.length', 3)
        cy.get('.reservation-list > :nth-child(1)').should('contain', 'Reese')
        cy.get('.reservation-list > :nth-child(3)').should('contain', 'Heather')
      });

    it('should correctly reflect what the user inputs', () => {
        cy.get('[placeholder="Name"]').type('Drew')
        cy.get('[placeholder="Date (mm/dd)"]').type('08/26')
        cy.get('[placeholder="Time"]').type('2:00')
        cy.get('[placeholder="Number of guests"]').type('1')
    })

    it('should correctly update DOM upon submission by user', () => {
        cy.get('[placeholder="Name"]').type('Drew')
        cy.get('[placeholder="Date (mm/dd)"]').type('08/26')
        cy.get('[placeholder="Time"]').type('2:00')
        cy.get('[placeholder="Number of guests"]').type('1')

        cy.get('button').contains('Make Reservation').click();
        cy.get('.reservation-card').should('have.length', 4)
        cy.get('.reservation-list > :nth-child(4)').should('contain', 'Drew')
    })
})
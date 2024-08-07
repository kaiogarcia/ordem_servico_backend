describe('my first test', () => {
  it('open the welcome page', () => {
    cy.visit('http://localhost:4200')
  })

  it('welcome msg is visible', () => {
    cy.visit('http://localhost:4200')
    cy.contains('Welcome')
  })
})
describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('builds without crashing', () => {
    cy.contains('h1', /home page/i).should('exist');
  });
});
